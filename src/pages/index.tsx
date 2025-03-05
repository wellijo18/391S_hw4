import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import ArticleCard from "../components/ArticleCard";

const LatestArticle: React.FC = () => {
    const [latestArticle, setLatestArticle] = useState();

    useEffect(() => {
        fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=1&ordering=-published_at")
            .then((res) => res.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setLatestArticle(data.results[0]);
                }
            })
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return latestArticle && <ArticleCard article={latestArticle} />;
};

export default function Home() {
    return (
        <>
            <div
                style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                <Typography.Title>Space! News</Typography.Title>
                <Typography.Paragraph>
                    Welcome to Space! News, your go-to source for the latest news and
                    updates on space exploration, astronomy, and everything in between.
                    Our team of experienced journalists and space enthusiasts are
                    dedicated to bringing you the most accurate and up-to-date information
                    on the latest discoveries, missions, and events happening in the
                    cosmos.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    From the latest Mars rover missions to the search for extraterrestrial
                    life, we cover it all. Our articles are written in an
                    easy-to-understand format, so you you do not need to be a rocket
                    scientist to enjoy them. We also feature stunning images and videos
                    from space, so you can experience the beauty and wonder of the
                    universe from the comfort of your own home.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    So whether you are a space enthusiast, a science buff, or just someone
                    who loves to learn new things, Space! News has something for you. Be
                    sure to check back often for the latest updates and stories from the
                    final frontier.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Make sure to check out all the articles, we have something for everyone! Make sure to check out our other pages.
                    We have plenty more content!
                </Typography.Paragraph>
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography.Title style={{ fontSize: "2rem", marginTop: "2rem" }}>Latest Article</Typography.Title>
                <a href="/news" style={{ textDecoration: "none", color: "blue" }}>See all articles</a>
            </div>
            <div>
                <LatestArticle />
            </div>
        </>
    );
}
