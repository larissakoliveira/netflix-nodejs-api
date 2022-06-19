import request from "supertest"
import app from '../../../..'
import { describe, it, expect } from '@jest/globals';

describe('Create user route test', () => {
  const userMock = {
    email: 'lari@gmail.com',
    password: 'qw12QW!@'
   }
  it('should create a new user and return http status 201', async () => {
    const requestBody = userMock
    const response = await request(app).post('/user').send(requestBody)
    const responseBody = response.body

    expect(response.statusCode).toBe(201)
    expect(responseBody.email).toContain('lari@gmail.com')
    expect(typeof responseBody).toBe('object')
  })
})
