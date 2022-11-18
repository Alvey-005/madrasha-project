import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("notices");
    let notices = await db.collection("notices").find({}).toArray();
    res.status(200).json(notices);
}