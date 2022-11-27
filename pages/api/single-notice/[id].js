import {db, storage} from "../../../firebaseConfig";
import {doc,getDoc, deleteDoc} from "firebase/firestore";
export default async function handler(req, res) {
    const {id} = req.query
    // const client = await clientPromise;
    // const db = client.db("notices");
    if (req.method === 'DELETE') {
        // let notice = await db.collection("notices").deleteOne({'slug': id});
        // res.status(200).json(notice)
        await deleteDoc(doc(db, "notice", id));
        return res.status(200).json({message:'data deleted'})
    } else if (req.method === 'GET'){
        // let notice = await db.collection("notices").findOne({'slug': id});
        const docRef = doc(db, "notice", id);
        const docSnap = await getDoc(docRef);
        res.status(200).json(docSnap.data());
    }
    else {
        return
    }
    // console.log(id);
    // res.end(`Post: ${slug.join(', ')}`)
}