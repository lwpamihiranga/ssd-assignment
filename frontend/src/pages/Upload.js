import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import GoogleHeader from '../components/header-google';

function Upload() {
  let history = useHistory();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [pdfs, setPdfs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMesage, setErrorMessage] = useState('');

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    // send the code to backend to get credentials when redirected after sign in
    if (code) {
      axios
        .get(`${backendUrl}/api/google/save?code=${code}`)
        .then((response) => {
          setIsAuthenticated(true);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // get the stored post pdf data form db
    axios
      .get(`${backendUrl}/api/post`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data) {
          setPdfs(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [backendUrl]);

  const handleLogin = () => {
    // get the url to request access and redirect
    axios
      .get(`${backendUrl}/api/google/authenticate`)
      .then((response) => {
        console.log('google authenticate request url:', response);

        // redirect to google authenticate page
        window.location.assign(`${response.data.url}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = (fileName) => {
    if (!isAuthenticated) {
      setErrorMessage('Please Sign in with Google!');
    } else {
      // invode the backend url with resource to upload file using oauth token
      axios
        .post(`${backendUrl}/api/google/upload`, {
          fileName: fileName,
        })
        .then((response) => {
          console.log(response);
          alert('PDF uploaded to Google Drive!');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <GoogleHeader handleLogin={handleLogin} />
      <div className="container">
        <h3 className="text-center">Upload PDF to Google Drive</h3>
        <div className="row">
          {errorMesage && (
            <p
              style={{
                marginTop: '30px',
                color: 'red',
                fontWeight: 'bold',
              }}>
              {errorMesage}
            </p>
          )}
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
                        onClick={(e) => handleUpload(pdf.fileName)}>
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
              Create & Publish Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
