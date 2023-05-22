import { UserRepository } from "../../infrastructure/firestore/repository/user/userRepository";
import { UserSignupUsecase, UserSignupUsecaseInterface } from "../../usecase/users/userSignupUsecase";

export class UserUsecaseRegistry { // これでsingletonになりますか？
    static getUserSignupUsecase = (): UserSignupUsecaseInterface => {
        return new UserSignupUsecase(new UserRepository()); // UserRepository objectも自動的にsingletonになりますか？
    }
}