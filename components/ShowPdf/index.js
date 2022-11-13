import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ShowPdf = ()=>{
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.js">
            <div
                style={{
                    height: '75%',
                    // width: 'auto',
                    width : '75%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >                <Viewer
                    fileUrl="pdf/hanotc31.pdf"
                    plugins={[
                        defaultLayoutPluginInstance,
                    ]}
                />
            </div>
        </Worker>
    );
}
export default ShowPdf;
