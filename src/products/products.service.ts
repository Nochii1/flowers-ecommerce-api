import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { SearchProductsDto } from './dtos/search-products.dto';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository:Repository<Product>
    ){}

    /**
     * Gets and counts the products quantity from the database
     * @returns List and count of products saved in the database
     */
    async getAll() {
        const [result, count] = await this.productsRepository.findAndCount(
            {
                relations:['category'],
            }
        );
    
        return {
            response: {
                data: result,
                count: count
            }
        } 
    }

    /**
     * Gets and counts the filtered products from the database using the search parameter
     * @param dto Search parameter to filter the products from the database
     * @returns List and count of products saved in the database filtered by the search parameter
     */
    async getAllBySearch(dto:SearchProductsDto){
        const [result, count] = await this.productsRepository.findAndCount(
            {
                where: { name: Like('%' + dto + '%') }, order: { name: "DESC" },
                relations:['category'],
            }
        );
    
        return {
            response: {
                data: result,
                count: count
            }
        } 
    }
}