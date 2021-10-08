import { ApiProperty } from '@nestjs/swagger';
import {
    IsOptional
} from 'class-validator';

/**
 * Validation scheme for get categories requests
 */
export class GetCategoriesDto {
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
}