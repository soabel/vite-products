// ports/IProductRepository.ts
import { IProduct } from '../domain/Product';

export interface IProductRepository {
  /**
   * Obtiene todos los productos.
   * @returns Una promesa que resuelve a un array de productos.
   */
  getAll(): Promise<IProduct[]>;

  /**
   * Crea un nuevo producto.
   * @param productData - Los datos del producto a crear (sin el ID).
   * @returns Una promesa que resuelve al producto creado.
   */
  create(productData: Omit<IProduct, 'id'>): Promise<IProduct>;
}
