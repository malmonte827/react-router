# 🛍️ React Vending Machine

> A React + Vite app using React Router to simulate a vending machine with dedicated routes for each snack or drink.

[![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/vite-4%2B-cyan)](https://vitejs.dev/) [![React Router](https://img.shields.io/badge/react--router-6+-purple)](https://reactrouter.com/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Contact](#contact)  

---

## 🌟 About

This assignment builds a **Vending Machine** app using React Router. Users navigate to routes like `/soda`, `/chips`, `/candy`, etc., and see an image, name, and price for each item. A “Home” route lists all items with links.

---

## ✨ Features

- **Dynamic Routing**: Each product has its own route (`/products/:name`)  
- **Home Page**: Overview of all vending items with links  
- **Fallback Route**: 404 page for unknown item routes  
- **React Router Hooks**: Uses `useParams` and `NavLink` for navigation  
- **Vite-Powered**: Fast development server and build  

---

## 🛠 Tech Stack

- **Framework:** React 18+  
- **Bundler:** Vite  
- **Routing:** React Router v6 (`react-router-dom`)  
- **Styling:** CSS  
- **Tooling:** ESLint, Prettier  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v16 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/react-router.git
cd react-router

# 2. Install dependencies
npm install react-router-dom
npm install
# or
yarn add react-router-dom
yarn

# 3. Start the development server
npm run dev
# or
yarn dev
```
---
### 📖 Usage

- Visit / to see the list of all vending items.

- Click an item link or enter /products/:name in the URL to view its details.

- Navigate back home with the “Home” link.

- Enter an unknown route to see the “404 – Item Not Found” page.
---
## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com

