import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoriesRepository:Repository<Category>,
    ){}
    
    /**
     * Gets paginated categories from the database
     * @param options Pagination configuration options
     * @returns Paginated list categories saved in the database
     */
    async paginate(options: IPaginationOptions) {
        return paginate<Category>(this.categoriesRepository, options);
    }
}
