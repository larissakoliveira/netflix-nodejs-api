import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ShowCategoryOptions } from "../types/enums"
import { Episode } from "./"

@Entity("shows")
class Show {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  cover: string

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

  @OneToMany(() => Episode, episode => episode.show, { eager: true })
  episodes: Episode[]
}

export default Show
