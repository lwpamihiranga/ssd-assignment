import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/header';

function Post() {
    let history = useHistory();
    const baseUrl = process.env.REACT_APP_FACEBOOK_BASE_URL;
    const pageId = process.env.REACT_APP_FACEBOOK_PAGE_ID;
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const [userAccessToken, setUserAccessToken] = useState(null);
    const [pageAccessToken, setPageAccessToken] = useState(null);
    const [postTitle, setPostTitle] = useState(null);
    const [postBody, setPostBody] = useState(null);
    const [postImageUrl, setPostImageUrl] = useState(null);
    const [errorMesage, setErrorMessage] = useState('');

    useEffect(() => {
        if (userAccessToken) {
            //get page access token
            axios
                .get(
                    `${baseUrl}/${pageId}?fields=access_token&access_token=${userAccessToken}`
                )
                .then((response) => {
                    console.log(response);
                    setPageAccessToken(response.data.access_token);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [userAccessToken, baseUrl, pageId]);

    const handleLogin = () => {
        // use fb sdk to generate the url to get permission and send the request
        window.FB.login(
            function (response) {
                // handle the response
                console.log(`Login response:`, response);
                if (response.authResponse)
                    setUserAccessToken(response.authResponse.accessToken);
            },
            {
                // scopes to request permission
                scope: 'public_profile,email,pages_manage_posts,pages_read_engagement,pages_show_list',
            }
        );
    };

    const publishPost = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Header handleLogin={handleLogin} />
            <div className="container">
                <h3 className="text-center">Publish a Post to FB Page</h3>
                <div className="row"></div>
                <div className="container mt-5">
                    <form>
                        <div className="mb-3 row">
                            <label
                                htmlFor="postTitle"
                                className="col-sm-2 col-form-label">
                                Topic
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postTitle"
                                    onChange={(e) => {
                                        setPostTitle(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label
                                htmlFor="postBody"
                                className="col-sm-2 col-form-label">
                                Body
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                    className="form-control"
                                    id="postBody"
                                    rows="7"
                                    onChange={(e) => {
                                        setPostBody(e.target.value);
                                    }}></textarea>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label
                                htmlFor="postImage"
                                className="col-sm-2 col-form-label">
                                Image URL
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postImage"
                                    onChange={(e) => {
                                        setPostImageUrl(e.target.value);
                                    }}></input>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={(event) => publishPost(event)}>
                                Publish Post
                            </button>
                            {errorMesage && (
                                <p style={{ marginTop: '30px' }}>
                                    {errorMesage}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
                <div className="row mt-5">
                    <div className="col text-rigth">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                                history.push('/upload');
                            }}>
                            View Generated PDFs
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
