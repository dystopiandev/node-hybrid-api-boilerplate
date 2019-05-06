# API Boilerplate
> Node.js-based (Express & Sequelize), database-agnostic API server with JWT auth.

## Configuration

Copy ```.env.EXAMPLE``` to ```.env.development``` and adjust as needed.

## Running
```
# Install dependencies
npm i

# Run a single instance...
node index.js

# ...or run in cluster mode with pm2
pm2 start index.js -i <n>
```
