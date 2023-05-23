import { Firestore } from "./infrastructure/firestore/firestore";
Firestore.initialize();

import { User } from "./domain/model/user/user";
import { server } from "./infrastructure/webservers/express/server";
import { getFirestore } from "firebase-admin/firestore";



server.listen(3000, () => {
    console.log('server is runnint at localhost:3000')
});

// master 에만 있음




// DB抜きで試し用のMap＜PK,Object＞
export let users = new Map<number, User>();
export let userId = {
    id: 1,
    nextId: function() {
        return this.id++;
    }
};


// const db = getFirestore();

// // const test = async () => {
// //     db.collection("cities").doc("LA").set({
// //         name: "Los Angeles2",
// //         state: "CA2",
// //         country: "USA2"
// //     })
// // }
// const test = async () => {
//     db.collection("cities").doc("LA").set({
//         state: "CA1",
//         country: "USA1",
//         number: 2
//     },{
//         merge: true,
//     })
// }

// test();

// const autoDocs = async () => {
//     const res = await db.collection('users').add({
//         first: 'younghan',
//         last: 'Jo',
//         born: 'kor'
//     })
//     const ref = await res.get();
//     console.log(ref.id, '->', ref.data());
// }

// autoDocs();

// const getTest1 = async () => {
//     const snapshot = await db.collection('users').doc('aturing').get();
//     console.log(snapshot.id, '->', snapshot.data());
//     const address = await db.collection('users').doc('aturing').collection('address').doc('main').get();
//     console.log(address.data());
//     console.log('-------------------------------------');
// }
// // getTest1();


// const getTest2 =async () => {
//     const snapshot = await db.collection('users').get();
//     snapshot.forEach(doc => {
//         console.log(doc.id, '->', doc.data());
//     });
// }
// // getTest2();