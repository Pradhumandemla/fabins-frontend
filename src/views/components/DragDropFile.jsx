import React, { useState } from 'react'
export default function DragDropFile(){
    const [files, setFiles] = useState([])

    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files.length > 0) {
          setFiles([...files]);
        }
      };

    const handleDragOver = (event) => {
        event.preventDefault()

    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-content-center file-upload">
                <div>
                    <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop} >
                        <div className="card-body d-flex align-items-center justify-content-center scan-div" draggable = "true" onDragStart={handleDragStart}>
                            <div className='file-upload-div'>
                            {files.map((file, index) => (<><img src={URL.createObjectURL(file)} alt="" /></>))}
                                {(files.length < 1) && (<>
                                    <div className='text-center'>
                                    <i className="bi bi-images display-3"></i>
                                    </div>
                                    <p>Drag here or click to upload photo.</p>
                                    </>)}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};