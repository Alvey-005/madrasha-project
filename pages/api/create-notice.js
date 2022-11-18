import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
    if(req.method === 'POST'){
        let bodyObject = JSON.parse(req.body);
        const client = await clientPromise;
        const db = client.db("notices");
        let newNotice = await db.collection("notices").insertOne(bodyObject);
        res.status(200).json({'name':"alvey"})
    }
    else{
        res.status(200).json({'name':"Shadli"})

    }
}