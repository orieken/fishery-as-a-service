import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Routes } from '../routes';
import { getRoutePath } from './get-route-path.function';

const port = 4700;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  if (request.url) {
    const route: string = getRoutePath(request.url)[0];
    if (Object.keys(Routes).includes(route)) {
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200);
      response.end(JSON.stringify(Routes[route]()));
    }
  }

  response.end('Hello world!');
});

server.listen(port, (): void => {
  console.log(`Server listening on port ${port}`);
});
