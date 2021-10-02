import { Controller, Get, Param, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { getUrlApiVersion } from 'src/utils/proyect-version';
import { SearchProductsDto } from './dtos/search-products.dto';
import { ProductsService } from './products.service';

const urlApiVersion = getUrlApiVersion()

@ApiTags('Products')
@Controller(`products`)
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Version('0')
    @Get()
    async getAllV0() {
        return await this.productsService.getAll()
    }

    @Version('0')
    @Get(':search')
    async getAllSearchV0(@Param('search') search:string, dto: SearchProductsDto) {
        return await this.productsService.getAllBySearch(search,dto)
    }
}
