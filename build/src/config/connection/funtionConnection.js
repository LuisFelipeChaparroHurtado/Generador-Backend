"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelizeColumns = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
/**
 * Converts the properties of each object in an array from snake_case to camelCase.
 * @param data - An array of objects with properties in snake_case format.
 */
function camelizeColumns(data) {
    // Get the first object in the array
    const tmp = data[0];
    // Iterate through the properties of the first object
    for (const prop in tmp) {
        // Convert the property name from snake_case to camelCase using pg-promise utility
        const camel = pg_promise_1.default.utils.camelize(prop);
        // If the camelCase property does not already exist in the object
        if (!(camel in tmp)) {
            // Iterate through each object in the array
            for (let i = 0; i < data.length; i++) {
                const d = data[i];
                // Create the camelCase property and assign it the value of the snake_case property
                d[camel] = d[prop];
                // Remove the original snake_case property
                delete d[prop];
            }
        }
    }
}
exports.camelizeColumns = camelizeColumns;
