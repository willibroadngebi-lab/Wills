const express = require('express');
const app = express();
const PORT = 8080; // Port for the server

app.get('/health', (req, res) => {
    res.send("Healthy"); // Response for the health check
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

