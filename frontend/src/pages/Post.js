import React, { useState, useEffect } from 'react';
import Header from '../components/header';

function Post() {
    const [postTitle, setPostTitle] = useState(null);
    const [postBody, setPostBody] = useState(null);
    const [postImageUrl, setPostImageUrl] = useState(null);
    const [errorMesage, setErrorMessage] = useState('');

    const handleLogin = () => {};

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
            </div>
        </>
    );
}

export default Post;
