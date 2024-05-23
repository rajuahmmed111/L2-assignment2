import { TOrders } from './order.interface';
import Order from './order.model';

const createOrder = async (order: TOrders) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrders = async (query: any) => {
  const result = await Order.find(query);
  return result;
};

export const OrdersServices = {
  createOrder,
  getAllOrders,
};
