import admin from 'firebase-admin';
const serviceAccount = require('../../../privateKey/nodejs-test-server-8677c-firebase-adminsdk-h0jt8-8123c2bdbb.json');

export class Firestore {
    static initialize = () => {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })
    }
}