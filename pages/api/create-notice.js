import clientPromise from "../../lib/mongodb";
import { promises as fs } from "fs";
import path from "path";
import formidable, { File } from 'formidable';
import mv from "mv";
import IncomingForm from "formidable/src/Formidable";
export const config = {
    api: {
        bodyParser: false,
    }
};
export default async function handler(req, res) {
    if(req.method === 'POST'){
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm()
            form.parse(req, async (err, fields, files) => {
                if (err) return reject(err)
                let oldPath = files.file.filepath;
                let newPath = `./public/uploads/${files.file.originalFilename}`;
                console.log(oldPath,'\n',newPath);
                mv(oldPath, newPath, function(err) {
                });
                const client = await clientPromise;
                const db = client.db("notices");
                let bodyObject ={
                    title:fields.title,
                    slug:fields.slug,
                    description:fields.description?fields.description:"",
                    fileName:files.file.originalFilename,
                    isPdf:fields.isPdf,
                }
                let newNotice = await db.collection("notices").insertOne(bodyObject);
                res.status(200).json({ newNotice, files })
            })
        })
    }
    else{
        res.status(200).json({'name':"Shadli"})

    }
}