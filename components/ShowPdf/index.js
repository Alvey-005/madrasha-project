import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box} from "@mui/material";

const ShowPdf = ({file})=>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
            <embed src={file} width="500" height="375"
                   type="application/pdf" />
        </Box>

    );
}
export default ShowPdf;
