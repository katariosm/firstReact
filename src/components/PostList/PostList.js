import React, {Component} from "react";
import {ListGroup} from "react-bootstrap";

class PostList extends Component {
    render() {
        const rows = [];
        this.props.posts.forEach((post) => {
            rows.push(
                <ListGroup.Item key={post.id}>
                    <p>{post.title}</p>
                    <div>{post.body}</div>
                </ListGroup.Item>
            );
        });

        return (
            <ListGroup>
                {rows}
            </ListGroup>
        );
    }
}

export default PostList;