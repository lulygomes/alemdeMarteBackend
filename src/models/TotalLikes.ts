import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('total-likes')
class TotalLikes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  photo_id: string;

  @Column()
  likes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default TotalLikes;
