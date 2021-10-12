import { Product } from 'src/products/entities/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

/**
 * Schema of the database categories entity
 */
@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true, default:null })
    name: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}