/*
 *
 *  Title: Sample route handler
 *  Description: Handles when user goes to sample routes
 *  Author: Abul Kalam Azad
 *  Date: 12/03/2022 - 18:40:11
 *
 */

// handler object - Module scaffolding
const handler = {};

// sampleHandler method
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

// exporting sampe handler
module.exports = handler;
