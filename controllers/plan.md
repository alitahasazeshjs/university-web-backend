Day 1 — Complete CRUD
Start here
Learn how to manage the entire student lifecycle.
- GET /api/students — get all students
- GET /api/students/:id — get one student
- POST /api/students — create a student
- PATCH /api/students/:id — update selected fields
- DELETE /api/students/:id — delete a student
Learn: HTTP methods, route parameters, request bodies, status codes, Mongoose queries.












Day 2 — Validation and error handling

Stop bad data before it enters your database.
- Require name, email, and department.
- Validate email format and age limits.
- Handle duplicate emails.
- Return meaningful 400, 404, and 409 responses.
- Create centralized error-handling middleware.
Learn: middleware, try/catch, next(error), Mongoose validation, HTTP errors.












Day 3 — Search, filtering, sorting and pagination

Make the API useful when the database contains thousands of students.
- Search students by name or email.
- Filter by department.
- Sort by age or creation date.
- Return 10 or 20 students per page.
Example: GET /api/students?department=IT&page=2&limit=10

Learn: query parameters, MongoDB filters, sort(), skip(), limit().












Day 4 — Understand Express deeply

Build reusable middleware and organize your code.
- Logging middleware for every request.
- Not-found middleware for unknown routes.
- Centralized error handling.
- Separate routes, controllers, models and services.
- Understand the request-response lifecycle.
Learn: app.use(), express.Router(), middleware order, next().












Day 5 — Authentication

Give users their own accounts.
- Register and log in.
- Hash passwords using a suitable password-hashing library.
- Issue and verify authentication tokens.
- Create a protected /api/auth/me route.
- Learn authentication versus authorization.
Learn: bcrypt or Argon2, JWT, authentication middleware, environment variables.












Day 6 — Authorization and security

Not every logged-in user should have the same permissions.
- Admin can create, update and delete students.
- Ordinary users have read-only access.
- Protect sensitive routes.
- Configure CORS correctly.
- Add rate limiting and secure input handling.
Learn: role-based access control, security middleware, least privilege.












Day 7 — Testing and deployment

Make your project reliable and accessible outside your computer.
- Test successful and failed requests.
- Test edge cases and permissions.
- Use automated tests with a testing framework.
- Configure production environment variables.
- Deploy your API and connect it to MongoDB Atlas.