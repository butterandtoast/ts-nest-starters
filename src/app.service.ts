import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private name: string;
  private space = " ";


  getHello(): string {
    return this.getAge() + this.space + 'Hello World' + this.space + this.getName();
  }

  getAge(): number {
    return 27;
  }

  setName(name: string){
    this.name = name;
  }

  getName(): string{
    return this.name ?? 'AJ';
  }
}
