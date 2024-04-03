
import React, { useEffect } from 'react'
import { client } from '../../client';
import { useState } from 'react';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import './FileUpload.scss'
const FileUpload = (props) => {

    const [fileurl, setFileUrl] = useState([])
    useEffect(() => {
        const query = props.query;


        client.fetch(query).then((data) => {
            setFileUrl(data[0].url);

 

        });
 
    }, []);
    return (
        <div className='fileUploadDocs'>
            <a href={`${fileurl}?dl=`}  >
                <h2>Required Documents</h2>
                <BsFillArrowUpRightSquareFill size={20} />
            </a>
        </div>
    )
}

export default FileUpload