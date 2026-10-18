
import { useEffect, useMemo, useState } from 'react'
import './App.css'

const API = '/api'
const money = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(Number(value) || 0)

async function request(path, options = {}) {
  const token = localStorage.getItem('shopbench_token')
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })

  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(
      result.error || result.message || result.errors?.join(', ') ||
      `Request failed (${response.status})`
    )
  }
  return result
}

function App() {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)
  const [cart, setCart] = useState([])
  const [view, setView] = useState('shop')
  const [notice, setNotice] = useState('')
  const [authMode, setAuthMode] = useState('login')
  const [auth, setAuth] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shopbench_user') || 'null')
    } catch {
      return null
    }
  })
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [orders, setOrders] = useState([])
  const [busy, setBusy] = useState(false)

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity, 0
  )

  async function loadProducts(nextPage = page) {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({
        page: String(nextPage),
        limit: '12',
      })
      if (search.trim()) params.set('search', search.trim())
      if (category) params.set('category_id', category)
      if (brand) params.set('brand_id', brand)
      if (minPrice !== '') params.set('min_price', minPrice)
      if (maxPrice !== '') params.set('max_price', maxPrice)
      if (sort) params.set('sort', sort)

      const result = await request(`/products?${params}`)
      setProducts(Array.isArray(result.data) ? result.data : [])
      setTotal(Number(result.total) || 0)
      setPage(nextPage)
    } catch (err) {
      setError(`${err.message}. Check that the backend is running on port 3000.`)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    request('/categories')
      .then((r) => setCategories(Array.isArray(r.data) ? r.data : []))
      .catch(() => {})
    request('/brands')
      .then((r) => setBrands(Array.isArray(r.data) ? r.data : []))
      .catch(() => {})
    loadProducts(1)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => loadProducts(1), 250)
    return () => clearTimeout(timer)
  }, [search, category, brand, minPrice, maxPrice, sort])

  async function openProduct(product) {
    setNotice('')
    try {
      const result = await request(`/products/${product.id}`)
      setSelected(result.data || product)
    } catch {
      setSelected(product)
    }
    setView('product')
  }

  function addToCart(product) {
    if (product.is_active === false) {
      setNotice('This product is not currently available.')
      return
    }
    const available = Number(product.stock_quantity)
    const existing = cart.find((item) => item.id === product.id)
    if (Number.isFinite(available) && available <= (existing?.quantity || 0)) {
      setNotice('There is not enough stock for another unit.')
      return
    }
    setCart((old) => {
      const found = old.find((item) => item.id === product.id)
      if (found) {
        return old.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...old, { ...product, quantity: 1 }]
    })
    setNotice(`${product.name} added to cart`)
    setView('cart')
    setSelected(null)
  }

  function changeQuantity(id, amount) {
    setCart((old) =>
      old
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  async function submitAuth(event) {
    event.preventDefault()
    setBusy(true)
    setNotice('')
    try {
      const isRegister = authMode === 'register'
      const result = await request(`/auth/${isRegister ? 'register' : 'login'}`, {
        method: 'POST',
        body: JSON.stringify(
          isRegister
            ? { name: form.name, email: form.email, password: form.password }
            : { email: form.email, password: form.password }
        ),
      })
      if (isRegister) {
        setAuthMode('login')
        setNotice('Account created. Please log in.')
      } else {
        const user = result.data?.user
        const token = result.data?.token
        if (!user || !token) throw new Error('Login response was incomplete')
        localStorage.setItem('shopbench_token', token)
        localStorage.setItem('shopbench_user', JSON.stringify(user))
        setAuth(user)
        setView('shop')
        setForm({ name: '', email: '', password: '' })
        setNotice(`Welcome, ${user.name}!`)
      }
    } catch (err) {
      setNotice(err.message)
    } finally {
      setBusy(false)
    }
  }

  async function loadOrders() {
    setBusy(true)
    setNotice('')
    try {
      const result = await request('/orders?page=1&limit=50')
      setOrders(Array.isArray(result.data) ? result.data : [])
      setView('orders')
    } catch (err) {
      setNotice(err.message)
      if (err.message.toLowerCase().includes('token') ||
          err.message.toLowerCase().includes('auth')) {
        logout()
      }
    } finally {
      setBusy(false)
    }
  }

  async function checkout() {
    if (!auth) {
      setNotice('Please log in before placing an order.')
      setView('auth')
      setAuthMode('login')
      return
    }
    if (!cart.length) return
    if (!window.confirm(
      `Place a DEMO order for ${money(cartTotal)}? This creates a real order in your database and reduces product stock. No payment will be processed.`
    )) return

    setBusy(true)
    setNotice('')
    try {
      const result = await request('/orders', {
        method: 'POST',
        body: JSON.stringify({
          items: cart.map((item) => ({
            product_id: Number(item.id),
            quantity: item.quantity,
          })),
        }),
      })
      setCart([])
      setNotice(`Order created successfully. Order ID: ${result.order?.id ?? 'created'}. No payment was processed.`)
      setView('shop')
      await loadProducts(1)
    } catch (err) {
      setNotice(err.message)
    } finally {
      setBusy(false)
    }
  }

  function logout() {
    localStorage.removeItem('shopbench_token')
    localStorage.removeItem('shopbench_user')
    setAuth(null)
    setOrders([])
    setView('shop')
    setNotice('You have been logged out.')
  }

  const maxPages = Math.max(1, Math.ceil(total / 12))
  const title = useMemo(() => ({
    shop: 'Discover products',
    cart: 'Your shopping bag',
    auth: authMode === 'register' ? 'Create your account' : 'Welcome back',
    orders: 'Your orders',
    product: selected?.name || 'Product details',
  })[view], [view, authMode, selected])

  return (
    <div className="app-shell">
      <div className="announcement">
        SHOPBENCH STORE <span>·</span> A research demo powered by the ShopBench API
      </div>

      <header className="topbar">
        <button className="brand" onClick={() => { setView('shop'); setSelected(null) }}>
          <span className="brand-mark">S</span>
          <span>shopbench<span className="brand-dot">.</span><small>THE DEMO STORE</small></span>
        </button>

        <nav className="nav-links">
          <button className={view === 'shop' ? 'nav-active' : ''} onClick={() => setView('shop')}>Shop</button>
          <button onClick={() => { setCategory(''); setBrand(''); setView('shop') }}>Collections</button>
          {auth && <button onClick={loadOrders}>My orders</button>}
        </nav>

        <div className="header-actions">
          {auth ? (
            <button className="account-button" onClick={() => setView('auth')}>
              <span className="avatar">{auth.name?.charAt(0)?.toUpperCase() || 'U'}</span>
              <span className="account-name">{auth.name}</span>
            </button>
          ) : (
            <button className="login-link" onClick={() => { setView('auth'); setAuthMode('login') }}>Sign in</button>
          )}
          <button className="cart-button" onClick={() => setView('cart')}>
            Bag <span>{cartCount}</span>
          </button>
        </div>
      </header>

      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button onClick={() => setNotice('')} aria-label="Dismiss">×</button>
        </div>
      )}

      <main>
        {view === 'shop' && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <div className="eyebrow"><span className="eyebrow-line" /> THE EVERYDAY EDIT</div>
                <h1>Good things.<br /><em>Better finds.</em></h1>
                <p>A considered collection of everyday essentials, ready to find their way to you.</p>
                <button className="primary-button" onClick={() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore the collection <span>↗</span>
                </button>
                <div className="hero-footnote"><span className="status-dot" /> Live catalogue · Connected to ShopBench API</div>
              </div>
              <div className="hero-art">
                <div className="art-circle circle-one" />
                <div className="art-circle circle-two" />
                <div className="art-label">CURATED<br />FOR DAILY LIFE</div>
                <div className="art-card art-card-main">
                  <div className="art-product">S.</div>
                  <span>THE ESSENTIALS</span>
                </div>
                <div className="art-card art-card-small"><span>01 / 03</span><strong>Thoughtful<br />by design.</strong></div>
                <div className="art-spark">✳</div>
              </div>
              <div className="hero-index">01 — SHOPBENCH COLLECTION</div>
            </section>

            <section className="benefits">
              <div><span>✳</span><p><strong>Made to explore</strong><small>Find your everyday favourites</small></p></div>
              <div><span>↗</span><p><strong>Simple by design</strong><small>A clean, easy shopping flow</small></p></div>
              <div><span>◉</span><p><strong>Powered by data</strong><small>Live products from our API</small></p></div>
            </section>

            <section className="catalogue section-wrap" id="catalogue">
              <div className="section-heading">
                <div><div className="eyebrow">THE COLLECTION</div><h2>Find your <em>favourite.</em></h2></div>
                <p>Thoughtful essentials, just a few clicks away.</p>
              </div>

              <div className="filters">
                <label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." /></label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">All categories</option>
                  {categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                  <option value="">All brands</option>
                  {brands.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="">Default order</option>
                  <option value="price_asc">Price: low to high</option>
                  <option value="price_desc">Price: high to low</option>
                  <option value="name_asc">Name: A–Z</option>
                  <option value="name_desc">Name: Z–A</option>
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </div>

              <div className="price-filter">
                <span>PRICE RANGE</span>
                <input type="number" min="0" placeholder="Min ₹" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <span>—</span>
                <input type="number" min="0" placeholder="Max ₹" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <button onClick={() => { setSearch(''); setCategory(''); setBrand(''); setMinPrice(''); setMaxPrice(''); setSort('') }}>Clear filters ↺</button>
                <span className="result-count">{total.toLocaleString('en-IN')} items</span>
              </div>

              {loading ? (
                <div className="state-box"><div className="spinner" /><p>Finding your favourites…</p></div>
              ) : error ? (
                <div className="state-box error-box"><span>!</span><h3>We couldn't load the collection</h3><p>{error}</p><button className="primary-button" onClick={() => loadProducts(1)}>Try again</button></div>
              ) : products.length === 0 ? (
                <div className="state-box"><span className="empty-icon">⌕</span><h3>No products found</h3><p>Try another search or clear your filters.</p></div>
              ) : (
                <div className="product-grid">
                  {products.map((product, index) => (
                    <article className="product-card" key={product.id}>
                      <button className={`product-visual visual-${index % 6}`} onClick={() => openProduct(product)} aria-label={`View ${product.name}`}>
                        <span className="product-number">ITEM / {String(product.id).padStart(3, '0')}</span>
                        <span className="product-illustration">{['◈', '✳', '◉', '⬡', '✦', '◇'][index % 6]}</span>
                        <span className="visual-caption">{product.category_name || 'SHOPBENCH SELECT'}</span>
                        <span className="quick-view">Quick view ↗</span>
                      </button>
                      <div className="product-meta">
                        <div className="product-brand">{product.brand_name || 'SHOPBENCH'}</div>
                        <button className="product-name" onClick={() => openProduct(product)}>{product.name}</button>
                        <div className="product-bottom"><strong>{money(product.price)}</strong><button onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>＋</button></div>
                        <small className={Number(product.stock_quantity) > 0 ? 'stock' : 'stock out'}>{Number(product.stock_quantity) > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}</small>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              <div className="pagination">
                <span>PAGE {page} OF {maxPages}</span>
                <div><button disabled={page <= 1 || loading} onClick={() => loadProducts(page - 1)}>← Previous</button><button disabled={page >= maxPages || loading} onClick={() => loadProducts(page + 1)}>Next →</button></div>
              </div>
            </section>
          </>
        )}

        {view === 'product' && selected && (
          <section className="detail-page section-wrap">
            <button className="back-link" onClick={() => setView('shop')}>← Back to collection</button>
            <div className="detail-layout">
              <div className="detail-art"><span>SHOPBENCH / ITEM {selected.id}</span><div>✳</div><small>{selected.category_name || 'THE EVERYDAY EDIT'}</small></div>
              <div className="detail-copy"><div className="eyebrow">{selected.brand_name || 'SHOPBENCH SELECT'}</div><h1>{selected.name}</h1><div className="detail-price">{money(selected.price)}</div><p>{selected.description || 'A considered everyday essential, selected for the ShopBench collection.'}</p><div className="detail-line"><span>Category</span><strong>{selected.category_name || 'General'}</strong></div><div className="detail-line"><span>Availability</span><strong>{Number(selected.stock_quantity) > 0 ? `${selected.stock_quantity} available` : 'Out of stock'}</strong></div><button className="primary-button wide-button" disabled={Number(selected.stock_quantity) <= 0} onClick={() => addToCart(selected)}>Add to bag — {money(selected.price)} <span>＋</span></button><small className="demo-note">Demo store · No real payment processing</small></div>
            </div>
          </section>
        )}

        {view === 'cart' && (
          <section className="section-wrap inner-page">
            <div className="eyebrow">YOUR SELECTION</div><h1>{title}</h1>
            {cart.length === 0 ? <div className="state-box"><span className="empty-icon">◇</span><h3>Your bag is taking a little break.</h3><p>Explore the collection and add something you love.</p><button className="primary-button" onClick={() => setView('shop')}>Explore products ↗</button></div> : <div className="cart-layout">
              <div className="cart-items">{cart.map((item) => <div className="cart-row" key={item.id}><div className="cart-thumb">{item.name?.charAt(0)}</div><div className="cart-info"><strong>{item.name}</strong><small>{item.brand_name || 'ShopBench select'}</small><span>{money(item.price)}</span></div><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)}>−</button><span>{item.quantity}</span><button disabled={item.quantity >= Number(item.stock_quantity)} onClick={() => changeQuantity(item.id, 1)}>＋</button></div><strong>{money(Number(item.price) * item.quantity)}</strong></div>)}</div>
              <aside className="summary-card"><div className="eyebrow">ORDER SUMMARY</div><div className="summary-line"><span>Subtotal</span><strong>{money(cartTotal)}</strong></div><div className="summary-line"><span>Delivery</span><strong>Free</strong></div><div className="summary-total"><span>Total</span><strong>{money(cartTotal)}</strong></div><p>Demo checkout only. No payment will be collected.</p><button className="primary-button wide-button" disabled={busy} onClick={checkout}>{busy ? 'Please wait…' : auth ? 'Place demo order →' : 'Sign in to continue →'}</button></aside>
            </div>}
          </section>
        )}

        {view === 'auth' && (
          <section className="auth-page">
            <div className="auth-art"><span className="eyebrow">THE SHOPBENCH EXPERIENCE</span><h2>Good things<br />start <em>here.</em></h2><p>Create an account to place demo orders and view your order history.</p><span className="auth-art-symbol">S.</span></div>
            <form className="auth-form" onSubmit={submitAuth}>
              <div className="eyebrow">YOUR ACCOUNT</div><h1>{auth ? 'You’re signed in.' : authMode === 'register' ? 'Create account' : 'Welcome back'}</h1>
              {auth ? <><p>Signed in as <strong>{auth.name}</strong><br />{auth.email}</p><button type="button" className="primary-button wide-button" onClick={loadOrders}>View my orders →</button><button type="button" className="secondary-button wide-button" onClick={logout}>Sign out</button></> : <>
                {authMode === 'register' && <label>Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>}
                <label>Email address<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
                <label>Password<input type="password" required minLength="6" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Enter your password" /></label>
                <button className="primary-button wide-button" disabled={busy}>{busy ? 'Please wait…' : authMode === 'register' ? 'Create account →' : 'Sign in →'}</button>
                <p className="switch-auth">{authMode === 'register' ? 'Already have an account?' : 'New to ShopBench?'} <button type="button" onClick={() => { setAuthMode(authMode === 'register' ? 'login' : 'register'); setNotice('') }}>{authMode === 'register' ? 'Sign in' : 'Create account'}</button></p>
              </>}
            </form>
          </section>
        )}

        {view === 'orders' && (
          <section className="section-wrap inner-page">
            <div className="eyebrow">YOUR ACCOUNT</div><h1>{title}</h1>
            <button className="back-link" onClick={() => setView('shop')}>← Continue shopping</button>
            {busy ? <div className="state-box"><div className="spinner" /><p>Loading your orders…</p></div> : orders.length === 0 ? <div className="state-box"><h3>No orders yet</h3><p>Your demo orders will appear here.</p><button className="primary-button" onClick={() => setView('shop')}>Explore products ↗</button></div> : <div className="orders-list">{orders.map((order) => <div className="order-row" key={order.id}><div><small>ORDER #{order.id}</small><strong>{new Date(order.created_at).toLocaleDateString('en-IN')}</strong></div><span className="order-status">{order.status}</span><strong>{money(order.total_amount)}</strong><button onClick={async () => { try { const r = await request(`/orders/${order.id}`); const o = r.data; alert(`Order #${o.id}\nStatus: ${o.status}\nTotal: ${money(o.total_amount)}`) } catch (e) { setNotice(e.message) } }}>Details ↗</button></div>)}</div>}
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-main"><div className="brand footer-brand"><span className="brand-mark">S</span><span>shopbench<span className="brand-dot">.</span><small>THE DEMO STORE</small></span></div><p>A research project exploring the experience of building Android applications across different frameworks.</p><div className="footer-links"><button onClick={() => setView('shop')}>Shop</button><button onClick={() => setView('cart')}>Shopping bag</button>{auth && <button onClick={loadOrders}>My orders</button>}</div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} SHOPBENCH</span><span>BUILT FOR RESEARCH · NOT A LIVE RETAIL STORE</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button></div>
      </footer>
    </div>
  )
}

export default App
