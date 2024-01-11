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
        <div>
            <div className="comments-card">
                <div className="title">
                    What our customer are saying
                </div>
                <div className="separator-line"/>
                <div className="row">
                    <div className="author">
                        <img className="avatar" src={state.comments[currentIndex].authorImagePath}/>
                        <div className="who">
                            <div className="name">{state.comments[currentIndex].authorName}</div>
                            <div className="position">{state.comments[currentIndex].authorPosition}</div>
                        </div>
                    </div>
                    <div className="comment">
                        {state.comments[currentIndex].comment}
                    </div>
                </div>
            </div>
            <div className="comments-arrows">
                <img src="arrow_left.svg" 
                    className={currentIndex == 0 ? "disabled" : "enabled"} 
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
                        <div className={index == currentIndex ? "point-selected" : "point-unselected"}/>
                    ))
                }
                <img src="arrow_right.svg" 
                    className={currentIndex == state.comments.length - 1 ? "disabled" : "enabled"}
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