import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { OrdersRoutes } from './Modules/order.route';
import { ProductsRoutes } from './Modules/product.route';
const app: Application = express();

// Middleware
app.use(bodyParser.json());

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductsRoutes);
app.use('/api/orders', OrdersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
