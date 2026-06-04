MRK.ER BOT

A modern WhatsApp Bot Management Platform built with Node.js, Express, and a professional web dashboard.

Features

- Modern Dark UI
- Admin Dashboard
- WhatsApp Pair Code Interface
- User Session Management
- Bot Statistics
- Command Management
- Responsive Design
- Secure Admin Login
- Multi-Device Ready Architecture

Project Structure

MRK.ER-BOT/
│
├── public/
│   ├── index.html
│   ├── pair.html
│   ├── login.html
│   ├── dashboard.html
│   ├── logs.html
│   │
│   ├── css/
│   ├── js/
│   └── assets/
│
├── routes/
├── middleware/
├── models/
├── config/
├── sessions/
│
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md

Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/MRK.ER-BOT.git
cd MRK.ER-BOT

Install dependencies:

npm install

Create an environment file:

PORT=3000
BOT_NAME=MRK.ER BOT
OWNER_NAME=MRK.ER
ADMIN_KEY=CHANGE_THIS

Start the application:

npm start

Access

Homepage:

http://localhost:3000

Admin Login:

http://localhost:3000/login.html

Dashboard:

http://localhost:3000/dashboard.html

Technologies

- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- MongoDB (Optional)
- GitHub

Security

- Keep your ".env" file private.
- Never upload session files.
- Never commit API keys.
- Change the default admin key before deployment.

Deployment

Recommended platforms:

- Render
- Railway
- VPS Hosting

Author

MRK.ER

License

MIT License

Copyright (c) 2025 MRK.ER

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to use, modify, and distribute the software.
