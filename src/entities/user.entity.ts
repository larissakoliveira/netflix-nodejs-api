import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100, unique: true })
  email: string

  @Column({ length: 100 })
  password: string
}

export default User
