import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ShowCategoryOptions } from "../types/enums"

@Entity("shows")
class Show {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  cover: string

  @Column({ length: 45 })
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
