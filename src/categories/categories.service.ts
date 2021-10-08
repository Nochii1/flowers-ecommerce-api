import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoriesRepository:Repository<Category>,
    ){}

    /**
     * Gets and counts the categories quantity from the database
     * @returns List and count of categories saved in the database
     */
    async getAll() {
        const [result, count] = await this.categoriesRepository.findAndCount();
    
        return {
            response: {
                data: result,
                count: count
            }
        }
    }
}
