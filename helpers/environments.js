/* eslint-disable operator-linebreak */
/*
 *
 *  Title: Environment variables
 *  Description: Defining all environment variables
 *  Author: Abul Kalam Azad
 *  Date: 13/03/2022 - 19:44:07
 *
 */

// Dependencies

// Environment object - Module scaffolding
const environment = {};

environment.staging = {
    port: 3000,
    envName: 'staging',
};

environment.production = {
    port: 5000,
    envName: 'production',
};

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';
const selectedEnvironment =
    typeof environment[currentEnvironment] === 'object'
        ? environment[currentEnvironment]
        : environment.staging;

// Exporting module
module.exports = selectedEnvironment;
