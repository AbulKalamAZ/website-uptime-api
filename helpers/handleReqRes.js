/* eslint-disable no-unused-vars */
/*
 *
 *  Title: Handle Request and Response
 *  Description: Handle Request and Response on server creation
 *  Author: Abul Kalam Azad
 *  Date: 12/03/2022 - 18:29:02
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const route = require('../routes');

// Handler object - Module Scaffolding
const handler = {};

// HandlerequestResponse method
handler.handleRequestResponse = function handleRequestResponse(req, res) {
    // Request handling
    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedURL.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const requestProperties = {
        parsedURL,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject,
    };

    const selectedHandler = route[trimmedPath] ? route[trimmedPath] : notFoundHandler;

    // On data event
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    // On data end event
    req.on('end', () => {
        realData += decoder.end();

        selectedHandler(requestProperties, (statusCode, payload) => {
            const code = typeof statusCode === 'number' ? statusCode : 500;
            const data = typeof payload === 'object' ? payload : {};
            const stringifiedData = JSON.stringify(data);

            res.writeHead(code);
            res.end(stringifiedData);
        });

        console.log(realData);
        // Response handle
        res.end("What's up!! Good people!");
    });
};

// Exporting handler
module.exports = handler;
