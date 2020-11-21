const colors = require('colors');

let logger = {
    msg : (msg) => {
        console.log("[" + colors.green("*") + "] " + msg);
    },
    error : (msg) => {
        console.log("[" + colors.red("*") + "] " + msg);
    } 
};

module.exports = logger;

