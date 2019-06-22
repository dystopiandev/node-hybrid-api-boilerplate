# API Boilerplate
> Database-agnostic, shared session REST API server + Socket.IO server with session-based auth written in Node.js

## Configuration

Copy ```.env.example``` to ```.env.development``` or ```.env.production``` and configure accordingly.

## Dependencies
- Redis Server

## Running
```
# Install dependencies
npm i

# Run a single instance...
node index.js

# ...or run in cluster mode with pm2
pm2 start
```
