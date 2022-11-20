import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
    if(req.method === 'DELETE'){
        const client = await clientPromise;
        const db = client.db("notices");
        res.status(200).json({'name':"alvey"})
    }
    else{
        res.status(200).json({'name':"Shadli"})

    }
}