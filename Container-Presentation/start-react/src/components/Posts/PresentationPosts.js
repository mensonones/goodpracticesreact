import React from "react";
import PropTypes from "prop-types";

import "../../styles/App.css";

const PresentationPosts = ({ posts }) => {
    return (
        <React.Fragment>
            <h1>Post List</h1>
            {posts.map((post, index) => (
                <div key={post.id}>
                    {index + 1}
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

PresentationPosts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PresentationPosts;