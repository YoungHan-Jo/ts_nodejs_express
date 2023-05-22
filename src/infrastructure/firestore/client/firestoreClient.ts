import { CollectionReference, DocumentData, Query } from "@google-cloud/firestore";
import { BaseFirestoreType } from "./baseFirestoreType";

export interface FirestoreClientInterface<T extends DocumentData> {
    collection: CollectionReference;
    loadByQuery(query: Query): Promise<BaseFirestoreType<T>[]>;
    create(object: T): Promise<BaseFirestoreType<T>>;
}

export class FirestoreClient<T extends DocumentData>
    implements FirestoreClientInterface<T>{
    public readonly collection: CollectionReference;

    constructor(collection: CollectionReference) {
        this.collection = collection;
    }

    loadByQuery = async (query: Query): Promise<BaseFirestoreType<T>[]> => {
        const result = await query.get();
        return result.docs
            .filter((doc) => doc.exists)
            .map((doc) => ({
                ...doc.data(), id: doc.id
            } as BaseFirestoreType<T>
            ));
    }
    create = async (object: T): Promise<BaseFirestoreType<T>> => {
        const requestData = {
            createdAt: new Date().getTime(),
            updateAt: new Date().getTime(),
            ...object,
        };

        const result = await this.collection.add(requestData);
        const data = await result.get();
        return { id: data.id, ...data.data() } as BaseFirestoreType<T>;
        // {...} as BaseFirestoreType<T>についてですが
        // firebaseに保存してfirestoreからもらって最終的にAPI responseでもらった値は下記のようですた。
        /*
        {
            "id": "TphXinzGGZDuc27biwat",
            "createdAt": 1684730508144,
            "name": "nick",
            "updateAt": 1684730508144,
            "rawPassword": "password123",
            "email": "nick123@gmail.com"
        }
        */
       // BaseFirestoreType＜T>のプロパティと構成が違いますが
       // as BaseFirestoreType<T> を付けてもなんか変化がなさそうで
       // as TYPE をつけて何の効果がありますか？
    }

}
