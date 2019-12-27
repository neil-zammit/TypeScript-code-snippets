import express, { Application, Request, Response } from 'express';

// Init app with express
const app: Application = express();

// Route Handler
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Test from Express and TypeScript</h1>');
});

// PORT variable
const PORT = process.env.PORT || 3000;

// Listen on localhost
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
