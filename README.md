# E-commerce Web Application

## Overview

This is a basic e-commerce web application where users can browse products, view product details, and add items to the cart.

The application is built using React (Create React App) and follows a simple and clean architecture.

---

## Features

### Home Page

* Displays a list of products in a grid layout
* Each product shows:

  * Image
  * Title
  * Price
* Click on a product to view details

### Product Detail Page

* Displays:

  * Product image
  * Title
  * Description
  * Price
* "Add to Cart" functionality
* Back to Home navigation

### Cart Functionality

* Add items to cart
* Displays:

  * Total number of items
  * Total price
* Cart data persists using localStorage
* Remove functionality is intentionally not implemented (as per requirement)

### Footer

* Fixed footer showing:

  * Total items
  * Total price

---

## Tech Stack

* React (Create React App)
* React Router DOM
* Context API (State Management)
* JavaScript (No TypeScript)
* Inline CSS (for styling)

---

## Project Structure

```
src/
│
├── components/
│   ├── ProductCard.js
│   └── Footer.js
│
├── pages/
│   ├── Home.js
│   └── ProductDetail.js
│
├── context/
│   └── CartContext.js
│
├── services/
│   └── api.js
│
├── App.js
└── index.js
```

---

## API Used

https://dummyjson.com/products

---

## Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
```

2. Navigate to project folder

```
cd ecommerce-app
```

3. Install dependencies

```
npm install
```

4. Start the application

```
npm start
```

5. Open in browser

```
http://localhost:3000
```

---

## Assumptions

* Product data is fetched from a public API
* Cart data is stored in localStorage for persistence
* No authentication is required

---

## Limitations

* No remove item functionality (as per requirement)
* No filter/sort functionality (intentionally excluded)
* No backend integration

---

## Future Improvements

* Add product quantity management
* Add cart page
* Add animations and UI enhancements
* Add accessibility improvements

---

## Author

Developed as part of an assignment to demonstrate frontend development skills.
