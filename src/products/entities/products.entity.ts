import { Category } from 'src/categories/entities/categories.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Schema of the database products entity
 */
@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true, default:null })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true, default:null })
    url_image: string;

    @Column({ type: 'float', nullable: true, default:null })
    price: number;

    @Column({ type: 'int', nullable: true, default:null })
    discount: number;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({name:"category"}) 
    category: Category;
}