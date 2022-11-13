import path from 'path';
import { promises as fs } from 'fs';
export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    if (fileContents === undefined || fileContents === null || fileContents === ""){
        res.status(200).json({'data':"no data found"});
    }
    else{
        res.status(200).json(JSON.parse(fileContents));
    }

    // fs.readFile("./data.json",'utf-8',(err,data)=> {
    //     console.log('data',data);
    //     return res.status(200).json(JSON.parse(data))
    // });
}