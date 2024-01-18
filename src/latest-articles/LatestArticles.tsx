import { useState } from "react";
import "./LatestArticles.css";
import "../Common.css";

const DEFAULT_ITEMS_COUNT = 3;

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

    return (
        <div className="articles-block">
            <div className="articles-block-title">
                Check out our latest article
            </div>
            <div className="articles-separator-line"/>
            <div className="articles-cards">
                {
                    (showAll ? state.articles : state.articles.slice(0, DEFAULT_ITEMS_COUNT))
                        .map((article) => (
                            <div className="article-card">
                                <img className="article-image" src={article.imagePath}/>
                                <div className="article-title">{article.title}</div>
                                <div className="article-description">{article.description}</div>
                                <div className="article-read-more">
                                    <div>Read more</div>
                                    <img width="15px" src="view_all_arrow.svg"/>
                                </div>
                            </div>
                        ))
                }
            </div>
            <button 
                onClick={() => setShowAll(!showAll)}
                className="outlined-button">
                {
                    showAll ? "Hide" : "View all"
                }
            </button>
        </div>
    )
}