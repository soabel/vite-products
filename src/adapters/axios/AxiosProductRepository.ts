// adapters/axios/AxiosProductRepository.ts
import axios, { AxiosInstance } from 'axios';
import { IProduct } from '../../domain/Product';
import { IProductRepository } from '../../ports/IProductRepository';


export class AxiosProductRepository implements IProductRepository {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API||'http://localhost:3000/products',
    });
  }

  async getAll(): Promise<IProduct[]> {
    const response = await this.client.get<IProduct[]>('/');
    return response.data;
  }

  async create(productData: Omit<IProduct, 'id'>): Promise<IProduct> {
    const response = await this.client.post<IProduct>('/', productData);
    return response.data;
  }
}
