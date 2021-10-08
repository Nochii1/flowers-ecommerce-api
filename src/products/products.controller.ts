import { Controller, Get, Param, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchProductsDto } from './dtos/search-products.dto';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller(`products`)
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    /**
     * Endpoint that we send as a response the list of all products and total count
     * @returns Response in json format with the list of all products and total count
     */
    @Version('0')
    @Get()
    async getAllV0() {
        return await this.productsService.getAll()
    }

    /**
     * Endpoint that sends as a response the list of products and total count filtered by the search parameter
     * @param dto Search parameter used to filter the list of products
     * @returns Response in json format with the list of products and total count filtered by the search parameter
     */
    @Version('0')
    @Get(':search')
    async getAllSearchV0(@Param('search') dto: SearchProductsDto) {
        return await this.productsService.getAllBySearch(dto)
    }
}
