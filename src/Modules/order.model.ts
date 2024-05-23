import { Schema, model } from 'mongoose';
import { TOrders } from './order.interface';

const orderSchema = new Schema<TOrders>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Order = model<TOrders>('Order', orderSchema);

export default Order;
