import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Product } from './entities/products.entity';
import { GetProductsDto } from './dtos/get-products.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository:Repository<Product>
    ){}
    
    /**
     * Gets paginated products from the database filtered depending on the specified query parameters
     * @param options Pagination configuration options
     * @param dto Get products query parameters schema
     * @returns Paginated list products saved in the database filtered depending on the specified query parameters
     */
    async paginate(options: IPaginationOptions, dto: GetProductsDto) {
        const {search,category,orderPrice} = dto
        
        return paginate<Product>(this.productsRepository, options, {
            loadRelationIds:true,
            where: [
                { name: Like(`%${search}%`) },
                { category: category }
            ],
            order:{
                price: orderPrice
            }
        });
    }
}