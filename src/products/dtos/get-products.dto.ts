import { ApiProperty } from '@nestjs/swagger';
import {
    IsEnum,
    IsOptional,
    IsString
} from 'class-validator';
import { OrderBy } from 'src/shared/enums/order-by.enum';
import { ProductsFilters } from '../enums/products-filters.enum';

/**
 * Validation scheme for get products requests
 */
export class GetProductsDto {
    @ApiProperty({
        required:false
    })
    @IsOptional()
    page?: number = 1;

    @ApiProperty({
        required:false
    })
    @IsOptional()
    limit?: number = 10;

    @ApiProperty({
        required:false
    })
    @IsString()
    @IsOptional()
    search?: string = '';

    @ApiProperty({
        required:false,
        enum: OrderBy
    })
    @IsEnum(OrderBy, {
        message: `Invalid option. Valids options are ASC o DESC`,
    })
    @IsOptional()
    orderPrice?: "ASC"|"DESC";

    @ApiProperty({
        required:false
    })
    @IsOptional()
    category?: number;

    @ApiProperty({
        required:false,
        enum: ProductsFilters
    })
    @IsEnum(ProductsFilters, {
        message: `Invalid option. Valids options are 'sales'`,
    })
    @IsOptional()
    filters?: "sales" | undefined;
}
