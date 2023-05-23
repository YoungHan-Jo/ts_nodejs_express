import { UserFirestoreType } from "../../infrastructure/firestore/repository/user/userFirestoreType";
import { UserRepositoryInterface } from "../../infrastructure/firestore/repository/user/userRepositoryInterface";
import { ApiError, HttpStatusCode } from "../../utils/customError";

export interface UserSignupUsecaseInterface {
    /**
     * @param name
     * @param email
     * @param rawPassword 
     * ただパラメーターについて説明するための役割ですか？
     */
    invoke({
        name,
        email,
        rawPassword,
    }: {
        name: string;
        email: string;
        rawPassword: string;
    }): Promise<UserFirestoreType>
}

export class UserSignupUsecase implements UserSignupUsecaseInterface {
    constructor(private userRepository: UserRepositoryInterface){}

    invoke = async ({
        name,
        email,
        rawPassword,
    }: {
        name: string;
        email: string;
        rawPassword: string;
    }): Promise<UserFirestoreType> => {
        const existUser = await this.userRepository.loadByEmail(email);
        if (existUser){
            throw new ApiError(
                HttpStatusCode.BadRequest,
                `this email is alreay exist. email: ${email}`
            )
        }
        
        const user = {
            name,
            email,
            rawPassword
        }

        return this.userRepository.create(user);
    }

}

