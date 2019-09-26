import React, { Component } from "react";
import PresentationPosts from "./PresentationPosts";

class ContainerPosts extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(console.log);
    }
    render() {
        return (
            <PresentationPosts posts={this.state.posts} />
        );
    }
}
export default ContainerPosts;