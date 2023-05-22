import { BaseFirestoreType } from "../../client/baseFirestoreType";

export type UserFirestoreType = BaseFirestoreType<BaseUserFirestoreType>;

export type BaseUserFirestoreType = {
    name: string;
    email: string;
}

