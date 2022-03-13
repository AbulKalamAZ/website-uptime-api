/*
 *
 *  Title: Routes
 *  Description: Application Routes
 *  Author: Abul Kalam Azad
 *  Date: 12/03/2022 - 18:38:44
 *
 */

// Dependencies
const { sampleHandler } = require('./handlers/routeHandlers/samplehandler');

// Route object - Module Scaffolding
const route = {
    sample: sampleHandler,
};

// Exporting route
module.exports = route;
