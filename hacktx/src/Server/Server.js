const corsAnywhere = require("cors-anywhere");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8080;

corsAnywhere
  .createServer()
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
  });
