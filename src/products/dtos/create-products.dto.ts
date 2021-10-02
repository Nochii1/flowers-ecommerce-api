import {
    IsNotEmpty,
    IsString,
    IsInt,
    IsNumber,
    Min,
    MaxLength,
    Max
} from 'class-validator';

export class CreateProductsDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(300, {
        message: 'Name is too long',
    })
    name: string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(300, {
        message: 'Url Image is too long',
    })
    urlImage: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(100)
    discount: number;

    @IsNotEmpty()
    @IsInt()
    category: number;
}