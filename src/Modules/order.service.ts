/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrders } from './order.interface';
import Order from './order.model';

const createOrder = async (orders: TOrders) => {
  const result = await Order.create(orders);

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
