import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/categories.entity';
import { Like, Repository } from 'typeorm';
import { SearchProductsDto } from './dtos/search-products.dto';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository:Repository<Product>,
        @InjectRepository(Category)
        private readonly categoriesRepository:Repository<Category>,
    ){}

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

    async getAllBySearch(search:string, dto:SearchProductsDto){
        const [result, count] = await this.productsRepository.findAndCount(
            {
                where: { name: Like('%' + search + '%') }, order: { name: "DESC" },
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