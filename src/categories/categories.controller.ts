import { Controller, Get, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@ApiTags('Categories')
@Controller(`categories`)
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}

    @Version('0')
    @Get()
    async getAllV0() {
        const data = await this.categoriesService.getAll()
        return { data }
    }
}
