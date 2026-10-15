# ShopBench REST API Contract

**Project:** ShopBench  
**Purpose:** Compare Native Android, Flutter, and React Native using a shared backend.

## 1. General Rules

- Base URL for local development: `http://localhost:3000`
- API prefix: `/api`
- Request and response format: JSON
- Authentication: JWT Bearer token for protected endpoints.
- All three applications must use the same API and database.
- Product prices and order totals are calculated and validated by the backend.

## 2. Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a customer |
| POST | `/api/auth/login` | Authenticate a user and obtain a JWT |

Registration fields and response formats must match the backend implementation.

Protected requests use:

`Authorization: Bearer <JWT_TOKEN>`

## 3. Product APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | List products |
| GET | `/api/categories` | List categories |
| GET | `/api/brands` | List brands |

Product listing supports the query parameters implemented by the backend, including search, category and brand filters, price range, sorting, pagination, page, and limit.

The precise parameter names and allowed sort values must match the implemented product validator.

## 4. Order APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/orders` | Create an order |
| GET | `/api/orders` | List the authenticated customer's orders |
| GET | `/api/orders/:id` | Retrieve an order owned by the authenticated customer |

### Create Order Request

`POST /api/orders`

Example body:

```json
{
  "items": [
    {
      "product_id": 2,
      "quantity": 1
    }
  ]
}
```

The client must not submit `user_id`. The backend obtains the customer identity from the authenticated JWT.

The backend validates products, active status, quantities, and stock. It calculates the total, inserts the order and its items, and reduces stock within a database transaction.

### Expected Outcomes

- Successful creation: `201 Created`
- Invalid request: `400 Bad Request`
- Missing or invalid authentication: `401 Unauthorized`
- Access denied by authorization rules: `403 Forbidden`
- Order unavailable to the authenticated customer: `404 Not Found`
- Unexpected server failure: `500 Internal Server Error`

Actual responses must be confirmed against the implemented backend.

## 5. Offline and Synchronization APIs

The synchronization API is mounted at `/api/sync`.

Its exact endpoints, request formats, conflict rules, retry behavior, and idempotency requirements must be documented after the synchronization implementation is finalized.

## 6. Experimental Consistency

All three Android applications must use:

- The same API endpoints and request parameters.
- The same PostgreSQL-backed dataset.
- Equivalent authentication and user workflows.
- The same benchmark operations and test data.
- Equivalent network conditions during measurements.

No framework-specific backend behavior may be introduced during experiments.

## 7. Versioning and Change Control

Record API contract changes in version control. Any endpoint, validation, or response change must be applied consistently to all three clients and documented before benchmark runs.