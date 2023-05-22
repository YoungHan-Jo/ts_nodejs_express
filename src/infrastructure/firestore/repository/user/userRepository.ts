import { getFirestore } from "firebase-admin/firestore";
import { FirestoreClient, FirestoreClientInterface } from "../../client/firestoreClient";
import { BaseUserFirestoreType, UserFirestoreType } from "./userFirestoreType";
import { UserRepositoryInterface } from "./userRepositoryInterface";

export class UserRepository implements UserRepositoryInterface {
    private firestore: FirestoreClientInterface<BaseUserFirestoreType>;

    constructor(){
        const collection = getFirestore().collection('users');
        this.firestore = new FirestoreClient(collection);
    }

    loadByEmail = async (email: string): Promise<UserFirestoreType | null> => {
        const query = this.firestore.collection.where('email','==',email);
        const result = await this.firestore.loadByQuery(query);
        return result[0] ?? null;
    }
    create(user: BaseUserFirestoreType): Promise<UserFirestoreType> {
        return this.firestore.create(user);
    }

}