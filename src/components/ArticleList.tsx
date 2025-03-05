import React from "react";
import { Skeleton } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
    articles: Article[];
    isLoading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, isLoading}) => {
    if (isLoading) {
        return (
            <div style={{display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} style={{ width: "300px" }}>
                        <Skeleton active />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: "16px"}}>
            {articles.map((article) => (
                <div key={article.id} style={{ width: "300px"}}>
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
