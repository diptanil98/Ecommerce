# 🛍️ E-Commerce Platform

A modern, full-stack e-commerce application built with React, Node.js, and MongoDB. Supports user authentication, product management, payments, and admin dashboards.

![Project Preview](https://via.placeholder.com/800x400?text=E-Commerce+Screenshot)  
*(Replace with an actual screenshot or GIF of your project)*

---

## 🚀 Features
- **User Authentication**: Login, registration, and JWT-based sessions.
- **Product Catalog**: Filter, search, and paginate products.
- **Shopping Cart**: Add/remove items, adjust quantities.
- **Checkout & Payments**: Integrated with Stripe/PayPal.
- **Admin Dashboard**: Manage products, orders, and users.
- **Responsive Design**: Mobile-friendly UI.

## 🛠️ Tech Stack
- **Frontend**: React, Redux, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Auth**: JWT, Bcrypt  
- **Payments**: Razorpay API  

---

## ⚙️ Installation
1. **Clone the repo**:
   ```bash
   git clone https://github.com/diptanil98/Ecommerce.git
   cd Ecommerce
2. **Set up backend**:
~~~
cd backend
npm install
cp .env.example .env  # Add your MongoDB/Stripe keys
npm start
~~~
2. **Set up frontend**:
~~~
cd frontend
cd ecommerce
npm install
npm run dev
~~~
## 📂 Project Structure

Ecommerce/
├── backend/
│   ├── middleware/        # Authentication
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── server.js          # Express setup
├── frontend/
│   ├── src/
│   │   ├── components/    # Cart, Product, Checkout
│   │   ├── pages/         # Home, Admin, Dashboard
│   │   └── contexts/      # Context API
│   │   └── data/          # Containing categories and brands
│   │   └── hooks/         # Contaning custom hooks
│   │   └── types/         # Types
│   │   └── utils/         # Containing pdf and email generator
│   └── App.tsx            # Main React component
└── README.md

## 📬 Contact
Diptanil Sarkar
Email: your.email@example.com

LinkedIn: Your Profile

Project Link: github.com/diptanil98/Ecommerce
