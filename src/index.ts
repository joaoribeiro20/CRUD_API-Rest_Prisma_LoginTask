import express from 'express';
import routes from './routes';
const cors = require('cors');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Connect to the database
prisma.$connect()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);

    // Listen on the specified port
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });