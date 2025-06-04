import { Hono } from 'hono';
import { serve } from '@hono/node-server';

// Create Hono app instance
const app = new Hono();

// Define routes
app.get('/', (c) => {
  return c.text('hello codeblossom');
});

// Configure and start the server
const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

export const server = serve({
  fetch: app.fetch,
  port: Number(port),
});

// Export app for testing
export { app };
