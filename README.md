# E-Commerce Backend

A scalable e-commerce backend API built with [tech stack].

## Features
- User authentication & authorization
- Product management
- Cart & wishlist
- Order management
- Payment integration
- Admin dashboard APIs
- JWT authentication
- Role-based access control

## Tech Stack
- Backend: Node.js / Express / Django / Spring Boot
- Database: MongoDB / PostgreSQL / MySQL
- Authentication: JWT / OAuth
- Cache: Redis
- API Testing: Postman

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| POST | /api/products | Create a new product (Admin) |
| PUT | /api/products/:id | Update product by ID (Admin) |
| DELETE | /api/products/:id | Delete product by ID (Admin) |
| GET | /api/cart | Get user cart |
| POST | /api/cart | Add item to cart |
| PUT | /api/cart/:id | Update cart item quantity |
| DELETE | /api/cart/:id | Remove item from cart |
| GET | /api/orders | Get user orders |
| POST | /api/orders | Create a new order |
| PUT | /api/orders/:id | Update order status |
| DELETE | /api/orders/:id | Cancel/Delete order |

