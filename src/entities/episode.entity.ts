import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./";

@Entity('episodes')
class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  title: string;

  @Column({ type: "text" })
  description: string;

  @Column({ length: 200 })
  cover: string;

  @Column()
  duration: number;

  @ManyToOne(() => Show, show => show.episodes, { onDelete: "CASCADE" })
  show: Show
}

export default Episode
