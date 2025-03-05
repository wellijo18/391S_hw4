import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";
import ArticleTable from "@/components/ArticleTable";

interface ArticleStatisticsProps {
    articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
    const uniqueNS = [...new Set(articles.map((article) => article.news_site))];

    const dateRange = {
        start: new Date(
            Math.min(...articles.map((article) => new Date(article.published_at).getTime()))
        ).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
        end: new Date(
            Math.max(...articles.map((article) => new Date(article.published_at).getTime()))
        ).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
    };

    const featArticles = articles.filter(article => article.featured).length;

    const UniqueSources = (
        <Table
            dataSource={uniqueNS.map((source) => ({key: source, name: source }))}
            rowKey="key"
            pagination={false}
            columns={[
                {
                    title: "Unique News Sources",
                    dataIndex: "name",
                    key: "name",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
            ]}
        />
    );

    const DateRanges = (
        <Table
            dataSource={[
                { key: 'earliest', label: 'Earliest:', date: dateRange.start },
                { key: 'latest', label: 'Latest:', date: dateRange.end }
            ]}
            rowKey="key"
            pagination={false}
            columns={[
                {
                    title: "Date Range",
                    dataIndex: "label",
                    key: "label",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
                {
                    title: "",
                    dataIndex: "date",
                    key: "date",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
            ]}
        />
    );

    const FeaturedArticles = (
        <Table
            dataSource={[{ key: 'featured', label: 'Count:', count: featArticles }]}
            rowKey="key"
            pagination={false}
            columns={[
                {
                    title: "Featured Articles",
                    dataIndex: "label",
                    key: "label",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
                {
                    title: "",
                    dataIndex: "count",
                    key: "count",
                    render: (text: number) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
            ]}
        />
    );

    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '8px', marginBottom: 16}}>
                <div style={{ flex: 1 }}>
                    {UniqueSources}
                </div>
                <div style={{ flex: 1 }}>
                    {DateRanges}
                </div>
                <div style={{ flex: 1 }}>
                    {FeaturedArticles}
                </div>
            </div>
        </div>
    );
};

export default ArticleStatistics;