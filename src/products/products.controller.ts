import { 
    Controller, Get, Query, Version, UsePipes, ValidationPipe 
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetProductsDto } from './dtos/get-products.dto';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller(`products`)
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    /**
     * Endpoint that sends as a response the list of products, meta and links, filteres depending on the specified query parameters
     * @param dto Get products query parameters schema
     * @returns Response in json format with the paginated results of the products list together with its metadata and its links, filtered depending on the specified query parameters
     */
    @Version('0')
    @UsePipes(new ValidationPipe({ transform: true }))
    @Get()
    async index( @Query() dto: GetProductsDto ) {
        const { limit, page } = dto
        
        return this.productsService.paginate({
            page: page,
            limit: limit > 100 ? 100 : limit,
            route:`${process.env.BASE_URL}/products`
        }, dto);
    }
}
