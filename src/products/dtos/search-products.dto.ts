import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

/**
 * Validation scheme for product search requests
 */
export class SearchProductsDto {
    @IsNotEmpty()
    @IsString()
    search: string;
}