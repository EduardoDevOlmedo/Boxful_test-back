import { Injectable } from '@nestjs/common';
import { FormStateDTO } from './user.dto';

@Injectable()
export class UserService {
  private users = [];

  async create(createdUserDTO: FormStateDTO) {
    // Simular guardado en la base de datos (aqui se usaria el model de prisma para guardar en la db)
    //pero debido a que debo simular, se utilizara un array guardado localmente.
    this.users.push(createdUserDTO);
    console.log('User data:', createdUserDTO);
    return { message: 'Data received and validated', data: createdUserDTO };
  }

  async findAll() {
    return this.users;
  }
}
