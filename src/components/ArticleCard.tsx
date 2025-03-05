import React from "react";
import { Typography } from "antd";
import { Article } from "@/types/types";
import image404 from "../assets/404.png";

const { Title, Paragraph } = Typography;

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({article }) => {

    const smallTitle = article.title.slice(0, 3);

    const fixDate = new Date(article.published_at).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',});

    return (
        <div
            style={{ width: "300px", margin: "1rem", border: "1px solid grey", borderRadius: "8px", padding: "1rem", cursor: "pointer", display: "flex", flexDirection: "column"}}
            onClick={() => window.open(article.url)}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem"}}>
                <Title style={{ marginBottom: 0, fontSize: "1rem", fontWeight: "bold" }}>
                    {smallTitle}
                </Title>
                <Paragraph style={{ marginBottom: 0, fontSize: "0.9rem" }}>
                    {fixDate}
                </Paragraph>
            </div>

            <div style={{width: "100%", height: "200px", overflow: "hidden", borderRadius: "8px", marginBottom: "1rem",}}>
                <img src={article.image_url || image404.src} alt={article.title} onError={(e) => (e.currentTarget.src = image404.src)} style={{width: "100%", height: "100%"}}/>
            </div>
            <div>
                <Title style={{fontSize: "1.5rem"}}>{article.title}</Title>
            </div>
            <div>
                <Paragraph>{article.summary}</Paragraph>
            </div>
        </div>
    );
};

export default ArticleCard;
