import http from "http";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { handleDelete, handleGet, handlePost } from "./routes";

dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

connectDB(url, "cryptus-silvia");

const server = http.createServer(async (request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>WELCOME TO CRYPTUS!!</h1>");
    /* response.end("test..."); */
    return;
  }
  if (request.method === "GET") {
    handleGet(request, response, passwordName);
    return;
  }
  if (request.method === "DELETE") {
    handleDelete(request, response, passwordName);
    return;
  }
  response.statusCode = 405;
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}🤘`);
});
