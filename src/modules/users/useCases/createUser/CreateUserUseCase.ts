import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists!");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
