# PesaPulse - Financial Management System

PesaPulse is a modern, full-stack financial management and point of sale (POS) system designed to help businesses manage their transactions, inventory, and financial operations efficiently.

## Features

- 🛍️ **Point of Sale (POS)**: Easy-to-use interface for processing sales transactions
- 📊 **Real-time Analytics**: Track sales, revenue, and inventory metrics
- 📦 **Inventory Management**: Keep track of stock levels and product details
- 👥 **User Management**: Secure multi-user access with role-based permissions
- 🛒 **Shopping Cart**: Intuitive cart management for processing multiple items
- 💳 **Payment Processing**: Handle various payment methods securely

## Technology Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces
- **Redux**: For state management
- **Ant Design**: UI component library for a modern look and feel
- **Axios**: Promise-based HTTP client for API requests

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: MongoDB object modeling for Node.js

### Development Tools
- **Concurrently**: Run multiple commands concurrently
- **Nodemon**: Auto-reload server during development
- **Morgan**: HTTP request logger middleware
- **Dotenv**: Environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/k-kipyego/PesaPulse.git
   cd pesapulse
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory:
   ```
   PORT=8080
   MONGO_URI=mongodb://localhost:27017/pesapulse
   ```

5. Start the development server:
   ```bash
   # From the root directory
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## Project Structure

```
pesapulse/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── redux/         # Redux store and reducers
│       └── styles/        # CSS styles
├── config/                # Backend configuration
├── controllers/           # Request handlers
├── models/               # Database models
├── routes/               # API routes
└── utils/                # Utility functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License. 