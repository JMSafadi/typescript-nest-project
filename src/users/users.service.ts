import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123123'
    },
    {
      id: 2,
      name: 'Juan Doe',
      phone: '456456'
    },
  ]
  getUsers() {
    return this.users
  }
}
