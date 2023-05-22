import { getFirestore } from "firebase-admin/firestore";
import { FirestoreClient, FirestoreClientInterface } from "../../client/firestoreClient";
import { BaseUserFirestoreType, UserFirestoreType } from "./userFirestoreType";
import { UserRepositoryInterface } from "./userRepositoryInterface";

export class UserRepository implements UserRepositoryInterface {
    private firestore: FirestoreClientInterface<BaseUserFirestoreType>; 
    // この段階でFirestoreClientInterface<T>の＜T>が確定になりますか??

    constructor() {
        const collection = getFirestore().collection('users');
        this.firestore = new FirestoreClient(collection);
    }

    loadByEmail = async (email: string): Promise<UserFirestoreType | null> => {
        const query = this.firestore.collection.where('email', '==', email);
        const result = await this.firestore.loadByQuery(query);
        return result[0] ?? null;
    }
    create(user: BaseUserFirestoreType): Promise<UserFirestoreType> {
        // 前のusecaseの段階で下記のようにuserが入れられて
        /*
        const user = {
            name,
            email,
            rawPassword
        }
        return this.userRepository.create(user);
        */
        // 今のcreate関数のパラメーターのタイプは BaseUserFirestoreTypeで
        /* 
        export type BaseUserFirestoreType = {
            name: string;
            email: string;
        }
        */ 
        // 結局的にはBaseUserFirestoreTypeじゃなくて
        // 前の段階でもらった userがそのまま次の段階に行くみたいですが、
        // ここで create（user: BaseUserFirestoreType) を書くことでobjectの構造が変化したりしませんか？
        
        return this.firestore.create(user);
    }

}