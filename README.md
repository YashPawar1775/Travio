# Travio 🧭 

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://travio-pied.vercel.app/listings)
[![Node.js Version](https://img.shields.io/badge/node-v22.19.0-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/database-MongoDB%20Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/cloud/atlas)

**Travio** is a full-featured, responsive, and secure travel listings and booking platform (inspired by Airbnb). It allows users to list travel destinations, explore stays, write reviews, search locations, filter listings by category, and view coordinates on interactive maps.

---

## 🌟 Key Features

*   🔒 **User Authentication & Authorization**: Secure signup, login, and session persistence (using passport, passport-local, and passport-local-mongoose).
*   🏡 **Listing Management (Full CRUD)**:
    *   Create listing with title, description, location, country, price, and category.
    *   Upload images to **Cloudinary** using multer.
    *   Geocoding addresses to coordinates automatically using the **MapTiler** client API.
    *   Update and delete listings (restricted to the listing owner).
*   💬 **Review System**:
    *   Users can submit reviews with ratings (1 to 5 stars visualized using a custom CSS star rating layout) and comments.
    *   Delete reviews (restricted to the review author).
*   🗺️ **Interactive Maps**: Beautiful map rendering on listing detail pages using the **MapTiler SDK** and markers at the exact geocoded location coordinates.
*   🔍 **Search & Category Filters**:
    *   Filter travel destinations by categories: `Trending`, `Rooms`, `City`, `Mountain`, `Castles`, `Pools`, `Camping`, `Farms`, `Arctic`, `Beach`, `Ships`, `Worship`, and `Safari`.
    *   A dynamic search bar in the navigation header to search by destination title, location, or country.
*   💵 **Dynamic Tax Display**: A toggle switch in the navbar to dynamically show/hide the price with 18% GST added.
*   🔔 **Flash Messages**: Instant visual feedback (Success & Error alerts) using `connect-flash`.
*   🚀 **Production-ready Sessions**: Storing sessions in MongoDB (via `connect-mongo`) instead of local memory, preventing session loss during server restarts.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, EJS (Embedded JavaScript), [Bootstrap 5](https://getbootstrap.com/), [FontAwesome](https://fontawesome.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [Mongoose ODM](https://mongoosejs.com/) |
| **Image Upload** | [Cloudinary](https://cloudinary.com/), [Multer](https://github.com/expressjs/multer) |
| **Map & Geocoding** | [MapTiler Client & SDK](https://www.maptiler.com/) |
| **Authentication** | Passport.js, Passport-Local, Passport-Local-Mongoose |
| **Validation** | [Joi](https://joi.dev/) (Schema validation library) |
| **Session & Alerts** | Express-Session, Connect-Flash, Connect-Mongo |

---

## 📁 Directory Structure

```text
├── controllers/          # Request handlers & logic (listings, reviews, users)
├── init/                 # DB Seeding files (mock dataset & initialization scripts)
│   ├── data.js           # Mock listings dataset
│   └── index.js          # DB seeding execution script
├── models/               # Mongoose Schemas (Listing, Review, User)
├── public/               # Static assets
│   ├── css/              # Stylesheets (style.css, rating.css)
│   └── js/               # Client-side scripts (map.js, script.js, toggle.js)
├── routes/               # Express Router controllers (listings, reviews, users)
├── utils/                # Utilities & Middleware (ExpressError, wrapAsync, validations)
├── views/                # EJS Templates
│   ├── includes/         # Partial views (navbar, footer, flash alerts)
│   ├── layouts/          # EJS Layout wrapper boilerplate
│   ├── listings/         # Listing views (index, show, edit, new, category, search)
│   └── users/            # Authentication views (signup, login)
├── app.js                # Application entry point & configuration setup
├── cloudConfig.js        # Cloudinary integration setup
├── schema.js             # Joi validation schemas for Listings and Reviews
├── package.json          # Dependencies & Scripts
└── .env                  # Environment Variables (Configuration keys)
```

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (recommended `v22.19.0` or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/YashPawar1775/Travio.git
cd Travio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a file named `.env` in the root directory and add the following keys with your credentials:

```properties
# Cloudinary Keys for Media Storage
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# MapTiler API Token for Maps & Geocoding
MAP_TOKEN=your_maptiler_api_token

# MongoDB Connection String (Atlas DB or Local URI)
ATLASDB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=Travio

# Express Session Security Secret
SECRET=your_super_secret_session_passcode
```

### 5. Seed the Database
Initialize the MongoDB database with mock dataset listings by running the seed script:
```bash
node init/index.js
```

### 6. Start the Server
Start the development server:
```bash
node app.js
```
The server will start running on port `8080`. Open your browser and navigate to:
```text
http://localhost:8080/listings
```

---

## 🛡️ Security & Authorization

To ensure data integrity and security, the application enforces the following controls:
1.  **Authentication Guard**: Users must be logged in to create listings, edit listings, delete listings, write reviews, or delete reviews.
2.  **Listing Authorization**: Only the owner of a listing is permitted to edit, update, or delete it.
3.  **Review Authorization**: Only the author of a review is allowed to delete their review.
4.  **Schema Validation**: Server-side request validations for listings and reviews are handled by **Joi** schemas before reaching the database, preventing injection or malformed data.
5.  **Error Handling**: Centralized error handling using `ExpressError` and `wrapAsync` wrappers ensures that unexpected issues render clean, user-friendly error pages (`views/error.ejs`).

---

## 🌐 Live Deployment
The project is hosted and live. Check it out here:  
👉 **[Travio Live Demo](https://travio-pied.vercel.app/listings)**

---

## 📄 License
This project is licensed under the ISC License.
