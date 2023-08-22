const express = require('express');
const cors = require('cors');
const sequelize = require('../database/connection');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;

        this.authPath = '/api/auth';
        this.usersPath = '/api/users';
        this.studentsPath = '/api/students';
        this.resultsPath = '/api/results';

        // Connect to database
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Application routes
        this.routes();
    }

    async connectDB() {

        try {

            await sequelize.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error(error);
        }

    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Body reading
        this.app.use(express.json());

        // Public directory
        this.app.use(express.static('backend/public'));
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.studentsPath, require('../routes/student'));
        this.app.use(this.resultsPath, require('../routes/result'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port:', this.port)
        });
    }

}

module.exports = Server;