export type BaseFirestoreType<T> = T & { // A & B , A type と　B type を　合わせる
    id: string;
    createdAtEpochMills: number;
    updatedAtEpochMills: number;
}