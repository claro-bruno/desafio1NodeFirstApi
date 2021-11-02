import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadExists = this.usersRepository.findByEmail(email);
    if(userAlreadExists) {
      throw new Error ('Email User Already Exists!');
    }
    const user = this.usersRepository.create({ name, email })
    return user;
  }
}

export { CreateUserUseCase };
