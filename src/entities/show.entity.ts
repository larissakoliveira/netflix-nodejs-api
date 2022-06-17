import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ShowCategoryOptions } from "../types/enums"

@Entity("shows")
class Show {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  cover: string

  // @Index({ unique: true })
  @Column({ length: 45, unique: true })
  title: string

  @Column({ length: 100 })
  director: string

  @Column("simple-array")
  actors: string[]

  @Column({ type: "longtext" })
  description: string

  @Column({ type: 'enum', default: ShowCategoryOptions.MOVIE, enum: ShowCategoryOptions })
  category: ShowCategoryOptions

  // @OneToMany(() => Episode, (episodes: string[]) => episodes.episode)
  // episodes: Episode[];
}

export default Show
