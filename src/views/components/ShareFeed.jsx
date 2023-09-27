import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UploadPost, addPost, getTimeline } from "../../post/post";
import { useDropzone } from 'react-dropzone';

export default function ShareFeed() {
  
  const [desc , setDesc] = useState("");
  const [files, setFiles] = useState([]);
  const { timeline } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  const thumbs = files.map(file => (
    <div style={{display: 'inline-flex',borderRadius: 2,border: '1px solid #eaeaea',marginBottom: 8,marginRight: 8,width: 100,height: 100,padding: 4,boxSizing: 'border-box'}} key={file.name}>
      <div style={{display: 'flex',minWidth: 0,overflow: 'hidden'}}>
        <img
          src={file.preview}
          style={{display: 'block',width: 'auto',height: '100%'}}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));
  const descriptionHandler = (e) =>{
    setDesc(e.target.value);
  }

  const addPostHandler = async (e) => { 
    e.preventDefault();
    if (files.length > 0) {    
      const formdata = new FormData();
      files.forEach((file, i) => {
        formdata.append('files',files[i]);
      });
      const res = await UploadPost(formdata);
      let img = res.data;
      addPost(dispatch,{desc ,img});
    }
    else {
      addPost(dispatch,{desc});
    }
    setDesc('');
    setFiles([]);
    getTimeline(dispatch);
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div className="card card-body">
        <div className="d-flex mb-3">
          <form className="w-100" >
            <div className="d-flex">
              <Link className="avatar avatar-xs me-2" href="/">
                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
              </Link>
              <textarea className="form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Share your thoughts..." onChange={descriptionHandler} value={desc} />
              <div className="text-end" >
                <button type="submit" className="btn btn-sm btn-primary-soft mt-1" onClick={addPostHandler}>Post</button>
              </div>
            </div>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',marginTop: 16}}>
              {thumbs}
            </aside>
          </form>
        </div>
      </div>
    </>
  );
}
