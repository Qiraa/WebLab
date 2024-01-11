import { useState } from "react";
import "./LatestArticles.css";

export class Article {
    imagePath: string;
    title: string;
    description: string;

    constructor(
        imagePath: string,
        title: string,
        description: string,
    ) {
        this.imagePath = imagePath;
        this.title = title;
        this.description = description;
    }
}

export function LatestArticles(
    state: { articles: Article[] }
) {
    const [showAll, setShowAll] = useState(false);

    let articlesToShow = showAll ? state.articles : state.articles.slice(0, 3)

    return (
        <div className="articles-block">
            <div className="cards">
                {
                    articlesToShow.map((article) => (
                        <div className="card">
                            <img className="image" src={article.imagePath}/>
                            <div className="title">{article.title}</div>
                            <div className="description">{article.description}</div>
                            <div className="read-more">
                                <div>Read more</div>
                                <img src="view_all_arrow.svg"/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button 
                onClick={() => setShowAll(!showAll)}
                className="articles-view-all">
                {
                    showAll ? "Hide" : "View all"
                }
            </button>
        </div>
    )
}