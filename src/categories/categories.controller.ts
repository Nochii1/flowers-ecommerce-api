import { Controller, Get, Query, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { GetCategoriesDto } from './dtos/get-categories.dto';

@ApiTags('Categories')
@Controller(`categories`)
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}

    /**
     * Endpoint that sends as a response the list of categories, meta and links
     * @param dto Get categories query parameters schema
     * @returns Response in json format with the paginated results of the categories list together with its metadata and its links
     */
    @Version('0')
    @Get()
    async index( @Query() dto: GetCategoriesDto ) {
        const { limit, page } = dto

        return this.categoriesService.paginate({
            page: page,
            limit: limit > 100 ? 100 : limit,
            route:`${process.env.BASE_URL}/categories`
        });
    }
}
