import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const fetchProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const fetchProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProduct = async (product: { title: string; description: string; price: number; image: string }) => {
  const { data } = await api.post('/products', product);
  return data;
};

export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
};
