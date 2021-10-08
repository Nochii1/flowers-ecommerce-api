import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller(`categories`)
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}

    /**
     * Endpoint that we send as a response the list of all categories and total count
     * @returns Response in json format with the list of all categories and total count
     */
    @Version('0')
    @Get()
    async getAllV0() {
        const data = await this.categoriesService.getAll()
        return { data }
    }
}
