
# LogiConnect

LogiConnect is a centralized digital platform to help MSMEs (Micro, Small & Medium Enterprises) manage logistics, automate pricing, resolve disputes, and track deliveries in real time.

## Features

- MSME and Vendor Registration & Login
- Order Placement and Delivery Management
- Automated Pricing System
- Real-Time Delivery Tracking (Google Maps API)
- Dispute Resolution Center
- Admin Dashboard for Platform Oversight

## Tech Stack

**Frontend:** React.js (with React Router)  
**Backend:** Node.js + Express  
**Database:** MongoDB (or PostgreSQL)  
**Authentication:** JWT (or Firebase Auth)  
**Map Integration:** Google Maps API or Mapbox  
**Deployment:** Netlify (frontend), Heroku or Render (backend)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/logiconnect.git
cd logiconnect
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Set up environment variables

Create `.env` files in both `frontend/` and `backend/` for:
- API keys (Google Maps, Auth)
- Database connection strings
- JWT secrets

### 5. Run the development servers

In two terminals:

```bash
# Frontend
cd frontend
npm start

# Backend
cd backend
npm run dev
```

## Deployment

- **Frontend:** Deploy on Netlify or Vercel  
- **Backend:** Deploy on Heroku, Render, or AWS  
- **Database:** Use MongoDB Atlas or a cloud SQL service

## Contributors

- Team Name: *[Your Team Name]*
- Members: *[Your Names Here]*

## License

MIT License © 2025 [Your Team Name]
