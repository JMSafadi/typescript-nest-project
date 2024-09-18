import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getUsers()
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user)
  }
}
