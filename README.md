
# **Patient Health Dashboard for Prior Authorization**

## **Table of Contents**
- [Installation Steps](#installation-steps)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## **Installation Steps**

### **1. Clone the Repository**
```bash
git clone https://github.com/souptiksarkar893/patient_dashboard.git
cd patient_dashboard
```

### **2. Backend Setup**
- Navigate to the backend directory:
  ```bash
  cd backend
  ```

- Install dependencies:
  ```bash
  npm install
  ```

- Start MongoDB (if not running):
  ```bash
  mongod
  ```

- Create the database and collections:
  ```bash
  mongo
  use patient_dashboard
  db.createCollection("patients")
  db.createCollection("authorizationrequests")
  ```

- Start the backend server:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```

### **3. Frontend Setup**
- Navigate to the frontend directory:
  ```bash
  cd ../frontend
  ```

- Install dependencies:
  ```bash
  npm install
  ```

- Start the frontend application:
  ```bash
  npm start
  ```

## **Environment Variables**

### **Backend (.env)**
Create a `.env` file in the `backend` directory:
```plaintext
PORT=5000
MONGODB_URI=mongodb://localhost:27017/patient_dashboard
```

### **Frontend (.env)**
(Optional) Create a `.env` file in the `frontend` directory:
```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

## **Running the Application**
1. Start MongoDB.
2. Start the backend server (`nodemon server.js`).
3. Start the frontend application (`npm start`).
4. Access the application at `http://localhost:3000`.

## **API Endpoints**
- **GET** `/api/patients` - Fetch a paginated list of patients.
- **POST** `/api/patients` - Add a new patient.
- **GET** `/api/authorization` - Fetch a list of prior authorization requests.
- **POST** `/api/authorization` - Submit a prior authorization request.

---
