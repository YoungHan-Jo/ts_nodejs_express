import { UserFirestoreType } from "../../../infrastructure/firestore/repository/user/userFirestoreType";
import { UserSignupRequestType } from "../../../infrastructure/webservers/express/models/userRequest";
import { UserUsecaseRegistry } from "../../../registry/usecase/userUsercaseRegistry";
import { UserSignupUsecaseInterface } from "../../../usecase/users/userSignupUsecase";

export interface UsersControllerInterface {
    signUp(signupRequest: UserSignupRequestType): Promise<UserFirestoreType>;
}

export class UsersController implements UsersControllerInterface {
    private userSignupUsecase: UserSignupUsecaseInterface;

    constructor(){
        this.userSignupUsecase = UserUsecaseRegistry.getUserSignupUsecase();
    }

    signUp = async (signupRequest: UserSignupRequestType): Promise<UserFirestoreType> => {
        const request = {
            name: signupRequest.name,
            email: signupRequest.email,
            rawPassword: signupRequest.password,
        };
        return this.userSignupUsecase.invoke(request);
    }

}