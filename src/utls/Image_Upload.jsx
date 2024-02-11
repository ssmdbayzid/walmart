import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi";


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const Image_Upload = ({ inputFiles, setInputFiles }) => {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    setInputFiles(files)
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = inputFiles && inputFiles.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);


  return (
    <section className="w-full flex items-center flex-row justify-start gap-3 ">     
    <div className='w-4/5'>
            <label
              htmlFor="dropzone-file"
              {...getRootProps()}
              className=" flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center py-3 w-full">
                <FiUploadCloud className='h-8 w-8 mb-2' />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input {...getInputProps()}  id="dropzone-file" type="file" className="hidden" />
            </label>     
            </div>    
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  )
}

export default Image_Upload

/*


  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='flex flex-col mt-20 items-center justify-center'>
    <div  {...getRootProps()} className='py-10 px-10 text-center border-2' >
      <input {...getInputProps()}  />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </div>
  )
}

export default Drug_Drop
*/