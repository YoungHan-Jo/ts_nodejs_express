import { BaseUserFirestoreType, UserFirestoreType } from "./userFirestoreType";

export interface UserRepositoryInterface {
    loadByEmail(email: string): Promise<UserFirestoreType | null>;
    create(user: BaseUserFirestoreType): Promise<UserFirestoreType>;
}