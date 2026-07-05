# Cheviseth Waddhanayu Portfolio

A full-stack portfolio websites showcasing my projects and contact information.

### Features
- Project Showcase
- Contact Form
- Admin Dashboard
- JWT Authentication

### Technologies
#### Frontend
- React
- Vite
- CSS
- Hosted on AWS Amplify

#### Backend
- Node.js & Express
- MongoDB
- Mongoose
- JWT
- Cors
- Hosted on AWS EC2 (nginx)

### Prerequisites
- Node.js v16+
- npm
- MongoDB instance

### Installation
#### Clone the repository
```
git clone https://github.com/Sandveech/Cheviseth-Waddhanayu-Portfolio.git
cd portfolio
```

#### Install frontend dependencies
```
npm install
```

#### Install backend dependencies
```
cd server
npm install
cd ..
```

#### Set up environment variables
```
cp .env.example .env
```

#### Configure the `.env` file
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/instance
PORT=3001
ADMIN_PASSWORD=12345678
JWT_SECRET=jwt_secret_key
VITE_API_URL=http://localhost:3001
```

### Running the application
#### Terminal 1 - Frontend
```
npm run dev
```
The frontend will run on http://localhost:5173

#### Terminal 2 - Backend
```
cd server
npm start
```
The backend will run on http://localhost:3001

### API Endpoints
#### Messages
- `POST /api/messages` - Create new message

#### Projects
- `GET /api/projects` - Get all projcets
- `POST /api/projects` - Create new project (admin only)
- `PATCH /api/projects/:id` - Update existing project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

#### Authentication
- `POST /api/auth/login` - Admin login

### Screenshots
![Screenshot](https://github.com/Sandveech/Cheviseth-Waddhanayu-Portfolio/blob/images/screenshot-1.png)

![Screenshot](https://github.com/Sandveech/Cheviseth-Waddhanayu-Portfolio/blob/images/screenshot-2.png)

![Screenshot](https://github.com/Sandveech/Cheviseth-Waddhanayu-Portfolio/blob/images/screenshot-3.png)

### Live Website URL
https://main.d55658nwiu1i9.amplifyapp.com

### GitHub Repository URL
https://github.com/Sandveech/Cheviseth-Waddhanayu-Portfolio

### Known Limitations
- I have no idea to be honest

### Future Improvements
- An additional admin page for managing messages
- A skills section
- Projects filter

### Author Information
#### GitHub
https://github.com/Sandveech
