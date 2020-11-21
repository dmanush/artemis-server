const WebSocket = require('ws');
const logger = require("./logger");
const config = require("config");
const ip = require('ip');

let NetworkManager = {
    server : null,
    dbPath : config.get("db-path"),
    dbDataPath : this.dbPath + "/data",
    dbConfigPath : this.dbPath + "/config",
    dbConfigPath : this.dbPath + "/log",
    dbPort : config.get("db-port"),
    dbIp : ip.address(),

    startServer : () => {
        server = newWebSocket.Server({ port: this.dbPort });
        logger.msg("Server started on port" + this.dbPort);

        server.on('connection', ws => {
            ws.on('message', message => {
              console.log(`Received message => ${message}`);
            })
            ws.send('ho!');
        });
    }, 

};

module.exports = NetworkManager;