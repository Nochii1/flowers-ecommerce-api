import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class SearchProductsDto {
    @IsNotEmpty()
    @IsString()
    search: string;
}