import path from 'path';
import { promises as fs } from 'fs';
export default async function handler(req, res) {
    if(req.method === 'POST'){
        try {
            const jsonDirectory = path.join(process.cwd(), 'json');
            const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
            let noticeData ={}
            if (fileContents === undefined || fileContents === null || fileContents === ""){
                noticeData= {};
            }
            else{
                noticeData= JSON.parse(fileContents);
            }
            let len = Object.keys(noticeData).length;
           let new_notice = JSON.parse(req.body);
            new_notice['id'] = len+1;
            noticeData[len+1] = new_notice;
            await fs.writeFile(jsonDirectory + '/data.json', JSON.stringify(noticeData), () => {
            })
            console.log('len',len);
        } catch (err) {
            console.log(err);
        }
        res.status(200).json({'name':"alvey"})
    }
    else{
        res.status(200).json({'name':"Shadli"})

    }
}