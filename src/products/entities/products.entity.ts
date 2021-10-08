import { Category } from 'src/categories/entities/categories.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

/**
 * Schema of the database products entity
 */
@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 300, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    urlImage!: string;

    @Column({ type: 'float', nullable: false })
    price!: number;

    @Column({ type: 'int', nullable: false })
    discount!: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}