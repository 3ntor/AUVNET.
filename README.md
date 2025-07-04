# AUVNET Backend & Dashboard

This repository contains:

1. **Backend** – Express.js REST API with JWT authentication, MongoDB, role-based authorization, and routes for Auth, Admin, User Products, and Wishlist.
2. **Frontend** – React dashboard (Create-React-App) that embeds an **API Tester** for interacting with every backend endpoint, including history & pagination.

---
`backend on http://localhost:8080`
`frontend on http://localhost:3001`
`deployed on https://melodious-lebkuchen-d6e9c2.netlify.app/`

## Tech Stack

| Layer    | Tech |
|----------|------|
| Backend  | Node.js · Express.js · MongoDB · Mongoose · JWT · Bcrypt |
| Frontend | React (CRA) · React Router · Fetch API |

---

## Folder Structure

```
AUVNET Backend Task/
├─ app.js                # Backend entry point
├─ routes/               # Express route files
├─ controllers/          # Route controllers
├─ models/               # Mongoose models
├─ middlwares/           # Auth & role middlewares
├─ frontend/             # React app (port 3001)
│   ├─ src/components/   # Dashboard, ApiTester, Login…
│   └─ …
└─ README.md             # (this file)
```

---

## Prerequisites

* Node.js >= 18
* MongoDB running locally **or** an Atlas connection string
* Git (to clone the repo)

---

## Quick Start

```bash
# 1. Clone
git clone <>
cd "AUVNET Backend Task"

# 2. Environment variables (backend)
cp .env.example .env          # then edit .env with your own values

# 3. Install dependencies
npm install                   # backend deps (run from project root)
cd frontend && npm install    # frontend deps
cd ..                         # back to project root

# 4. Run in development
npm run dev       # starts backend on http://localhost:8080  (uses nodemon)
cd frontend && npm start   # starts React on http://localhost:3001 (proxy → 8080)
```


Backend logs will show `Server running on port 8080`, while CRA will automatically open `http://localhost:8080`.

---

## Environment Variables

Create `.env` (or edit the generated copy) in the project root:

```
MONGO_URI= mongodb+srv://ahmed:ahmed123@ahmed.bymtr2n.mongodb.net/?retryWrites=true&w=majority&appName=ahmed
JWT_SECRET=supersecret
PORT=8080
```


Admin credentials from the seed script:
```
email: admin@admin.com
password: admin
```


## API Tester in Dashboard

1. Login on `http://localhost:3001/login`.
2. Navigate to **Dashboard** (protected route).
3. Click **Show API Tester**.
4. Choose an endpoint button **or** type your own.
5. For GET requests, set **page & limit** parameters.
6. Send the request; response and status appear immediately.
7. History of calls is stored in `localStorage` – you can delete individual items (×) or clear all.

---

## Useful NPM Scripts

| Command (root)  | Description |
|-----------------|-------------|
| `npm run dev`   | Start backend with Nodemon |
| `npm start`     | Start backend without nodemon |
| `npm test`      | Run backend tests (if provided) |
|
| **frontend/** |
| `npm start`     | Start React app |
| `npm run build` | Production build |

---

## Deployment

The app is ready for deployment on any Node-compatible host ( Railway).
Ensure environment variables are set and CRA build output is served (or host the frontend separately on Netlify).

### Live Demo

The application is deployed at:
" https://melodious-lebkuchen-d6e9c2.netlify.app/ "



