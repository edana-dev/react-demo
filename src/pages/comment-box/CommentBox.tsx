import React from "react";
import "./CommentBox.css"

export interface Comment {
    author: string,
    content: string
}

export interface CommentListProps {
    comments: Comment[]
}

export interface CommentItemProps {
    comment: Comment
}


const comments: Comment[] = [
    {
        author: "Nate",
        content: "Hello React! This is a sample comment.",
    },
    {author: "Kevin", content: "Hello Redux!"},
    {author: "Bood", content: "Hello Rekit!"},
];


const CommentItem = (props: CommentItemProps) => {
    return (
        <div className="comment-item">
            <span className="avatar"></span>
            <a href="#">{props.comment.author}</a>
            <p>{props.comment.content}</p>
        </div>
    )
}

const CommentList = (props: CommentListProps) => {
    return (
        <div className="comment-list">
            {props.comments.map(comment => <CommentItem comment={comment}/>)}
        </div>
    );
}

const CommentForm = () => {
    return (
        <div className="comment-form">
            <form onSubmit={event => event.preventDefault()}>
                <textarea style={{display: "block", width: "100%"}}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

const CommentBox = () => {
    return (
        <div className="comment-box">
            <h1>Comments ({comments.length})</h1>
            <CommentList comments={comments}/>
            <CommentForm/>
        </div>
    );
}

export default CommentBox