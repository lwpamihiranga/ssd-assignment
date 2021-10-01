import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Upload() {
    let history = useHistory();
    const [pdfs, setPdfs] = useState([]);

    const handleLogin = () => {};

    const handleUpload = (fileName) => {};

    return (
        <div className="container">
            <h3 className="text-center">Upload PDF to Google Drive</h3>
            <div className="row">
                <div className="col text-center">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleLogin}>
                        Authenticate with Google
                    </button>
                </div>
            </div>
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Post Title</th>

                            <th scope="col" className="text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pdfs.map((pdf, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pdf.title}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-primary mb-3"
                                            onClick={(e) =>
                                                handleUpload(pdf.fileName)
                                            }>
                                            Upload to Drive
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="row mt-5">
                <div className="col text-rigth">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            history.push('/post');
                        }}>
                        Go to Publish Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Upload;
