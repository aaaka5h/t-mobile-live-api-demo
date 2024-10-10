import express, { Request, Response } from 'express';
import { data } from './data.ts';

const app = express();
const port = process.env.PORT || 3000;

app.get('/customer/:customerId', (req: Request, res: Response) => {
 if (data.some((customer) => customer.customer_id === req.params.customerId)) {
  res.json(
   data.find((customer) => customer?.customer_id === req.params.customerId)
  );
 } else {
  res.status(404).send(`${req.params.customerId} not a valid customer id`);
 }
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
