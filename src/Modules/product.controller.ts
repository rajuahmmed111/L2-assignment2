/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { productZodSchema } from './product.zod.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // create zod validation
    const zodValidation = productZodSchema.parse(productData);

    const result = await ProductServices.createProduct(zodValidation);
    res.status(200).json({
      success: true,
      message: 'Product is create successfully',
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
const getAllProducts = async (req: Request, res: Response) => {
  try {
    // for search data
    const searchTerm = req.query.searchTerm;
    const result = await ProductServices.getAllProducts(searchTerm);
    res.status(200).json({
      success: true,
      message: 'Products are fetched successfully',
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
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product is fetched successfully',
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    // const updateData = req.body;
    const result = await ProductServices.updateProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

const deletedProductById = async (req: Request, res: Response) => {
  try {
    const { deletedProductId } = req.params;
    await ProductServices.deletedProductById(deletedProductId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deletedProductById,
};
