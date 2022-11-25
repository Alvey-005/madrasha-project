import {  db } from '../../firebaseConfig';
import { collection, addDoc ,getDocs} from 'firebase/firestore';
export default async function handler(req, res) {
    // const client = await clientPromise;
    // const db = client.db("notices");
    // let notices = await db.collection("notices").find({}).toArray();
    const noticeInstance = collection(db, 'notice');
    const noticeSnapshot = await getDocs(noticeInstance);
    let notices=[];
    noticeSnapshot.forEach(doc => {
        notices.push({
            ...doc.data(),
            id:doc.id
        })
    })
    res.status(200).json(notices);
}