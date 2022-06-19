import { DataSource } from "typeorm"
import { UserService} from "../../../services"
import { AppDataSource } from "../../../infrastructure/database/data-source"

function getRandomEmail () {
  return `lari${Math.random()}@mail.com`
}

describe("Test create user path", () => {
  let connection: DataSource;
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res
      })
      .catch((err) => {
        console.log(err)
      })
  })
  afterAll(async () => {
    console.log("")
  })
  test("Should create a new user", async () => {
    const email = getRandomEmail()
    const password = "qw12QW!@"

    const newUser = { email, password }

    const userService = new UserService()
    const response = await userService.create(newUser)

    expect(response).toHaveProperty("id")
    expect(response.email).toBe(email)
  })
})
