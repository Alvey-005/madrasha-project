import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    const {id} = req.query
    const client = await clientPromise;
    const db = client.db("notices");
    if (req.method === 'DELETE') {
        let notice = await db.collection("notices").deleteOne({'slug': id});
        res.status(200).json(notice)
    } else if (req.method === 'GET'){
        let notice = await db.collection("notices").findOne({'slug': id});
        res.status(200).json(notice);
    }
    else {
        return
    }
    // console.log(id);
    // res.end(`Post: ${slug.join(', ')}`)
}