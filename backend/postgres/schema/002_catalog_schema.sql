-- ============================================================
-- ShopBench
-- Schema Version: 002
-- Purpose:
-- Final catalog-aware PostgreSQL schema for the benchmark.
--
-- IMPORTANT:
-- This file defines the complete schema for a fresh database.
-- It does not modify an existing database.
-- Existing databases should use the corresponding migration.
-- ============================================================


-- ============================================================
-- 1. ROLES
-- ============================================================

CREATE TABLE roles (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name VARCHAR(50) NOT NULL UNIQUE,

    description TEXT
);


-- ============================================================
-- 2. USERS
-- ============================================================

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    role_id INTEGER NOT NULL,

    name VARCHAR(150) NOT NULL,

    email VARCHAR(255) NOT NULL UNIQUE,

    password_hash TEXT NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_users_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
);


-- ============================================================
-- 3. CATEGORIES
-- ============================================================

CREATE TABLE categories (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name VARCHAR(100) NOT NULL UNIQUE,

    description TEXT,

    image_path VARCHAR(255)
);


-- ============================================================
-- 4. BRANDS
-- ============================================================

CREATE TABLE brands (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name VARCHAR(100) NOT NULL UNIQUE,

    description TEXT,

    logo_path VARCHAR(255)
);


-- ============================================================
-- 5. SUPPLIERS
-- ============================================================

CREATE TABLE suppliers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name VARCHAR(150) NOT NULL,

    email VARCHAR(255),

    phone VARCHAR(30),

    address TEXT,

    logo_path VARCHAR(255),

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP
);


-- ============================================================
-- 6. PRODUCTS
-- ============================================================

CREATE TABLE products (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    category_id INTEGER NOT NULL,

    brand_id INTEGER NOT NULL,

    supplier_id INTEGER NOT NULL,

    name VARCHAR(200) NOT NULL,

    description TEXT,

    price NUMERIC(12, 2) NOT NULL,

    stock_quantity INTEGER NOT NULL DEFAULT 0,

    image_path VARCHAR(255),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id),

    CONSTRAINT fk_products_brand
        FOREIGN KEY (brand_id)
        REFERENCES brands(id),

    CONSTRAINT fk_products_supplier
        FOREIGN KEY (supplier_id)
        REFERENCES suppliers(id),

    CONSTRAINT chk_products_price
        CHECK (price >= 0),

    CONSTRAINT chk_products_stock
        CHECK (stock_quantity >= 0)
);


-- ============================================================
-- 7. ORDERS
-- ============================================================

CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    total_amount NUMERIC(12, 2) NOT NULL DEFAULT 0,

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT chk_orders_status
        CHECK (
            status IN (
                'PENDING',
                'CONFIRMED',
                'CANCELLED',
                'COMPLETED'
            )
        ),

    CONSTRAINT chk_orders_total_amount
        CHECK (total_amount >= 0)
);


-- ============================================================
-- 8. ORDER ITEMS
-- ============================================================

CREATE TABLE order_items (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    order_id INTEGER NOT NULL,

    product_id INTEGER NOT NULL,

    quantity INTEGER NOT NULL,

    unit_price NUMERIC(12, 2) NOT NULL,

    CONSTRAINT fk_order_items_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_order_items_product
        FOREIGN KEY (product_id)
        REFERENCES products(id),

    CONSTRAINT chk_order_items_quantity
        CHECK (quantity > 0),

    CONSTRAINT chk_order_items_unit_price
        CHECK (unit_price >= 0),

    CONSTRAINT uq_order_items_order_product
        UNIQUE (order_id, product_id)
);


-- ============================================================
-- 9. SYNC RECORDS
-- ============================================================

CREATE TABLE sync_records (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER,

    entity_type VARCHAR(30) NOT NULL,

    entity_id INTEGER NOT NULL,

    operation VARCHAR(20) NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    synced_at TIMESTAMP WITH TIME ZONE,

    retry_count INTEGER NOT NULL DEFAULT 0,

    error_message TEXT,

    CONSTRAINT fk_sync_records_user
        FOREIGN KEY (user_id)
        REFERENCES users(id),

    CONSTRAINT chk_sync_entity_type
        CHECK (
            entity_type IN (
                'PRODUCT',
                'ORDER',
                'ORDER_ITEM'
            )
        ),

    CONSTRAINT chk_sync_operation
        CHECK (
            operation IN (
                'CREATE',
                'UPDATE',
                'DELETE'
            )
        ),

    CONSTRAINT chk_sync_status
        CHECK (
            status IN (
                'PENDING',
                'SYNCED',
                'FAILED'
            )
        ),

    CONSTRAINT chk_sync_retry_count
        CHECK (retry_count >= 0)
);


-- ============================================================
-- 10. AUDIT LOGS
-- ============================================================

CREATE TABLE audit_logs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id INTEGER,

    action VARCHAR(100) NOT NULL,

    entity_type VARCHAR(50),

    entity_id INTEGER,

    details JSONB,

    created_at TIMESTAMP WITH TIME ZONE
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_audit_logs_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
);


-- ============================================================
-- INDEXES
-- ============================================================

-- Users
CREATE INDEX idx_users_role_id
    ON users(role_id);


-- Products
CREATE INDEX idx_products_category_id
    ON products(category_id);

CREATE INDEX idx_products_brand_id
    ON products(brand_id);

CREATE INDEX idx_products_supplier_id
    ON products(supplier_id);

CREATE INDEX idx_products_name
    ON products(name);

CREATE INDEX idx_products_created_at
    ON products(created_at);


-- Orders
CREATE INDEX idx_orders_user_id
    ON orders(user_id);

CREATE INDEX idx_orders_created_at
    ON orders(created_at);

CREATE INDEX idx_orders_status
    ON orders(status);


-- Order items
CREATE INDEX idx_order_items_order_id
    ON order_items(order_id);

CREATE INDEX idx_order_items_product_id
    ON order_items(product_id);


-- Sync
CREATE INDEX idx_sync_records_user_id
    ON sync_records(user_id);

CREATE INDEX idx_sync_records_status
    ON sync_records(status);

CREATE INDEX idx_sync_records_created_at
    ON sync_records(created_at);


-- Audit
CREATE INDEX idx_audit_logs_user_id
    ON audit_logs(user_id);

CREATE INDEX idx_audit_logs_created_at
    ON audit_logs(created_at);


-- ============================================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================================

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ============================================================
-- UPDATED_AT TRIGGERS
-- ============================================================

CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


CREATE TRIGGER trg_products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


CREATE TRIGGER trg_orders_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();