/*
 *
 *  Title: Uptime Monitoring API
 *  Description: RESTful API server using NodeJS for uptime monitoring of websites
 *  Author: Abul Kalam Azad
 *  Date: 12/03/2022 - 12:32:41
 *
 */

// Dependencies

const http = require('http');
const helpers = require('./helpers/handleReqRes');

// App object - Module scaffolding
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create server
app.runServer = () => {
    const server = http.createServer(helpers.handleRequestResponse);
    server.listen(app.config.port, () => {
        console.log(`Server is listening to port ${app.config.port}`);
    });
};

// Start the server
app.runServer();
