# Codeblossom API

A simple Hono API that returns "hello codeblossom".

## Features

- Simple GET endpoint that returns "hello codeblossom"
- Built with Hono framework and TypeScript
- Docker support for containerization
- Clean project structure

## Running Locally

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

4. Start the production server:
   ```
   npm start
   ```

## Docker

Build the Docker image:
```
docker build -t codeblossom-api .
```

Run the Docker container:
```
docker run -p 3000:3000 codeblossom-api
```

The API will be available at http://localhost:3000

## Project Structure

```
api/
├── src/           # Source code
│   └── index.ts   # Main application file
├── package.json   # Dependencies and scripts
├── tsconfig.json  # TypeScript configuration
├── Dockerfile     # Docker configuration
└── README.md      # Documentation
```
