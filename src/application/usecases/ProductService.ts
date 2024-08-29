// application/usecases/ProductService.ts
import { IProduct } from '../../domain/Product';
import { IProductRepository } from '../../ports/IProductRepository';

export class ProductService {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts(): Promise<IProduct[]> {
    return this.productRepository.getAll();
  }

  async createProduct(productData: Omit<IProduct, 'id'>): Promise<IProduct> {
    return this.productRepository.create(productData);
  }
}
