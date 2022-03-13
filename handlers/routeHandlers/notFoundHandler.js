/*
 *
 *  Title: Not found route handler
 *  Description: Handles when user goes to other routes than specified
 *  Author: Abul Kalam Azad
 *  Date: 12/03/2022 - 18:40:11
 *
 */

// handler object - Module scaffolding
const handler = {};

// sampleHandler method
handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(404, {
        message: "The requested url wasn't found",
    });
};

// exporting sampe handler
module.exports = handler;
