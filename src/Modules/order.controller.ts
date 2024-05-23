/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrdersServices } from './order.service';
import { orderZodSchema } from './order.zod.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // console.log(orderData);

    const orderZod = orderZodSchema.parse(orderData);
    const result = await OrdersServices.createOrder(orderZod);
    res.status(200).json({
      success: true,
      message: 'Order is create successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  let queryOrder = {};
  if (req.query?.email) {
    queryOrder = { email: req.query.email };
  }
  try {
    const result = await OrdersServices.getAllOrders(queryOrder);
    res.status(200).json({
      success: true,
      message: 'Orders are fetched successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
