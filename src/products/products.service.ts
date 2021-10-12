import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, MoreThan, Repository } from 'typeorm';
import {
    paginate,
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
        const {search,category,orderPrice, filters} = dto

        const noWhereOptions = {
            loadRelationIds:true,
            order:{
                price: orderPrice
            }
        }

        const whereOptions = {
            loadRelationIds:true,
            where: [
                { 
                    discount: filters == 'sales' ? MoreThan(0) : MoreThan(-1), 
                    category: category ? category : 0 
                },
                { 
                    discount: filters == 'sales' ? MoreThan(0) : MoreThan(-1), 
                    name: search != '' ? Like(`%${search}%`) : ''   
                },
                { 
                    category: !filters && !search && category ? category : 0  
                },
                { 
                    discount: !category && !search && filters == 'sales' ? MoreThan(0) : 99999
                },
                { 
                    name: !filters && !category && search != '' ? Like(`%${search}%`) : '' 
                },
            ],
            order:{
                price: orderPrice
            }
        }
        return paginate<Product>(this.productsRepository, options, !filters && !category && !search ? noWhereOptions : whereOptions);
    }
}