# GrowVest – Investing and Stock Prices

GrowVest is a beginner-friendly, full-stack educational investment dashboard inspired by modern Indian investing apps. It lets users track sample stocks, create a personal watchlist, and manage a **demo-only** portfolio. It never executes trades, stores payment information, or uses real-time prices.

## Features

- JWT registration/login with bcrypt password hashing
- Protected dashboard, stock watchlist, portfolio, activity, and profile pages
- Ten mock Indian stock records with sample price histories
- Per-user MongoDB watchlist, portfolio holdings, and activity history
- Add, update, and remove educational/demo portfolio holdings
- Responsive React UI with loading, empty, success, and error states

## Technologies

- Frontend: React, React Router, Vite, Axios, CSS
- Backend: Node.js, Express, JWT, bcryptjs
- Database: MongoDB with Mongoose

## Folder structure

```text
GrowVest/
├── backend/
│   ├── config/stocks.js       # Mock stock source
│   ├── controllers/           # API actions
│   ├── middleware/            # JWT and error middleware
│   ├── models/                # MongoDB schemas
│   ├── routes/                # REST endpoints
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/        # Shared UI and route protection
│       ├── context/           # Authentication state
│       ├── pages/             # App pages
│       └── services/api.js    # Axios configuration
└── README.md
```

## Installation and MongoDB setup

1. Install [Node.js](https://nodejs.org/) (version 18 or later) and run MongoDB locally, or create a free MongoDB Atlas cluster.
2. In `backend`, copy `.env.example` to `.env`, then set `MONGODB_URI` and use a long random `JWT_SECRET`.
3. In `frontend`, optionally copy `.env.example` to `.env`. The included default already expects the backend at `http://localhost:5000/api`.

## Run the application

Open two terminals from the project root:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL printed by the frontend (normally `http://localhost:5173`).

## API overview

| Area | Endpoints |
| --- | --- |
| Authentication | `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me` |
| Stocks | `GET /api/stocks`, `GET /api/stocks/:symbol` |
| Watchlist | `GET/POST /api/watchlist`, `DELETE /api/watchlist/:symbol` |
| Portfolio | `GET/POST /api/portfolio`, `PUT/DELETE /api/portfolio/:id` |
| Other | `GET /api/activities`, `GET/PUT /api/profile` |

All endpoints except authentication and stock data require `Authorization: Bearer <token>`.

## Important limitation

Every price, percentage, chart point, market status, portfolio value, and gain/loss in GrowVest is mock/demo data. It is not real-time, is not financial advice, and cannot be used for real-money trading.

## Future scope

- Add portfolio allocation charts
- Add password reset and email verification
- Add test suites and rate limiting
- Offer CSV export of the demo portfolio
