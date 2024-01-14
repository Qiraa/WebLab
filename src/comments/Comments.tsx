import { useState } from "react";
import "./Comments.css";

export class Comment {
    authorImagePath: string;
    authorName: string;
    authorPosition: string;
    comment: string;

    constructor(
        authorImagePath: string,
        authorName: string,
        authorPosition: string,
        comment: string,
    ) {
        this.authorImagePath = authorImagePath;
        this.authorName = authorName;
        this.authorPosition = authorPosition;
        this.comment = comment;
    }
}

export function Comments(
    state: { comments: Comment[] }
) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="comments-block">
            <div className="comments-card">
                <div className="comments-title">
                    What our customer are saying
                </div>
                <div className="comments-separator-line"/>
                <div className="comments-row">
                    <div className="comment-author">
                        <img className="comment-author-avatar" src={state.comments[currentIndex].authorImagePath}/>
                        <div className="comment-who">
                            <div className="comment-author-name">{state.comments[currentIndex].authorName}</div>
                            <div className="comment-author-position">{state.comments[currentIndex].authorPosition}</div>
                        </div>
                    </div>
                    <div className="comment-text">
                        {state.comments[currentIndex].comment}
                    </div>
                </div>
            </div>
            <div className="comments-arrow">
                <img src="arrow_left.svg" 
                    className={currentIndex == 0 ? "comment-arrow-disabled" : "comment-arrow-enabled"} 
                    onClick={
                        () => {
                            if (currentIndex > 0) {
                                setCurrentIndex(currentIndex - 1)
                            }
                        }
                    }
                />
                {
                    state.comments.map((_, index) => (
                        <div
                         className={index == currentIndex ? "comment-point-selected" : "comment-point-unselected"}
                         onClick={() => setCurrentIndex(index)}
                         />
                    ))
                }
                <img src="arrow_right.svg" 
                    className={currentIndex == state.comments.length - 1 ? "comment-arrow-disabled" : "comment-arrow-enabled"}
                    onClick={
                        () => {
                            if (currentIndex < state.comments.length - 1) {
                                setCurrentIndex(currentIndex + 1)
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}