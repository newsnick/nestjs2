import { Controller, Get } from '@nestjs/common';

@Controller()
export class BookController {
  @Get('/home')
  welcome(): string {
    return 'Welcome Nest based Rest API project';
  }
}
