import * as fs from 'fs';
export default async function handler(req, res) {
    if(req.method == 'POST'){
        try {
            let noticeData= JSON.parse(fs.readFileSync("./data.json",'utf-8'));
            let len = Object.keys(noticeData).length;
           let new_notice = JSON.parse(req.body);
            new_notice['id'] = len+1;
            noticeData[len+1] = new_notice;
            fs.writeFile('./data.json',JSON.stringify(noticeData),()=>{})
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