const express = require('express');
const client = require("cloud-config-client");

const app = express();

client.load({
    application: "client-config"
}).then((config) => {
    const port = config.get("server.port");


    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
});