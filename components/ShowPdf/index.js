import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box} from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";


const ShowPdf = ({file})=>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        // <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.js">
        //     <div
        //         style={{
        //             height: '75%',
        //             // width: 'auto',
        //             width : '75%',
        //             marginLeft: 'auto',
        //             marginRight: 'auto',
        //         }}
        //     >                <Viewer
        //             fileUrl={file}
        //             plugins={[
        //                 defaultLayoutPluginInstance,
        //             ]}
        //         />
        //     </div>
        // </Worker>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center" ,margin:"2rem auto"}}>
            {/*<embed src={file} width="500" height="375"*/}
            {/*       type="application/pdf" />*/}
            {/*<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>*/}
            {/*    <Page pageNumber={pageNumber} />*/}
            {/*</Document>*/}
            <Card>
                <CardMedia
                    className="cardmedia"
                    component="iframe"
                    Height="1056px"
                    src={file}
                />
            </Card>
        </Box>

    );
}
export default ShowPdf;
