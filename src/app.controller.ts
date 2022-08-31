import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getAge(): number{
    return this.appService.getAge();
  }

  @Put()
  setName(name: string) {
    return this.appService.setName('AJ');
  }
}
