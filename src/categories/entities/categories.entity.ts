import { Product } from 'src/products/entities/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    name!: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}