/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProducts = async (searchTerm: any) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({ category: { $regex: regex } });
  return result;
};

const getProductById = async (productId: string) => {
  const result = await Product.findById({ _id: productId });
  return result;
};

const updateProduct = async (productId: string) => {
  const result = await Product.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        name: 'Bluetooth Speaker',
      },
    },
    { new: true },
  );

  return result;
};

const deletedProductById = async (deletedProductId: string) => {
  const result = await Product.deleteOne(
    { deletedProductId },
    { isDeleted: true },
  );
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deletedProductById,
};
