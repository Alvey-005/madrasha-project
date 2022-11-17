import path from 'path';
import { promises as fs } from 'fs';
import clientPromise from "../../lib/mongodb";
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("notices");
    let notices = await db.collection("notices").find({}).toArray();
    console.log(notices);
    res.status(200).json(notices);


    // const jsonDirectory = path.join(process.cwd(), 'json');
    // const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    // if (fileContents === undefined || fileContents === null || fileContents === ""){
    //     res.status(200).json({'data':"no data found"});
    // }
    // else{
    //     res.status(200).json(JSON.parse(fileContents));
    // }

    // fs.readFile("./data.json",'utf-8',(err,data)=> {
    //     console.log('data',data);
    //     return res.status(200).json(JSON.parse(data))
    // });
}