import React, { useEffect, useState } from "react";
import { Divider, Typography, Pagination, Switch, Table } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "@/components/ArticleCard";
import ArticleStatistics from "@/components/ArticleStatistics";

const { Title } = Typography;

const NewsPage: React.FC = () => {
    const [isGridView, setIsGridView] = useState<boolean>(true);
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [totalArticles, setTotalArticles] = useState<number>(0);

    useEffect(() => {
        fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/?limit=${pageSize}&page=${currentPage}&ordering=-published_at`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.results) {
                    setArticles(data.results);
                    setTotalArticles(data.count);
                }
            })
            .then(() => console.log("Articles fetched successfully"))
            .catch((e: Error) => console.log("Error fetching articles: " + e));
    }, [currentPage, pageSize]);

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
        window.scrollTo(0, 0);
    };

    const handleViewChange = (checked: boolean) => {
        setIsGridView(checked);
    };

    const gridView = (
        <div
            style={{display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", marginTop: "10px"}}>
            {articles.map((article) => (
                <div key={article.id} style={{ width: "300px" }}>
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    );

    const tableView = (
        <Table
            dataSource={articles}
            rowKey="id"
            pagination={false}
            columns={[
                {
                    title: "Title",
                    dataIndex: "title",
                    key: "title",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
                {
                    title: "News Source",
                    dataIndex: "news_site",
                    key: "news_site",
                    render: (text: string) => <div style={{ textAlign: "left" }}>{text}</div>,
                },
                {
                    title: "Published Date",
                    dataIndex: "published_at",
                    key: "published_at",
                    render: (text: string) => new Date(text).toLocaleDateString(),
                },
            ]}
        />
    );

    return (
        <>
            <div style={{ width: "100%", textAlign: "center" }}>
                <div style={{marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "flex-start",}}>
                    <Typography.Text style={{ marginRight: "8px" }}>View as:</Typography.Text>
                    <Switch checked={isGridView} onChange={handleViewChange} checkedChildren="Grid" unCheckedChildren="Table"/>
                    <Typography.Text style={{ marginLeft: "8px" }}>
                        (Switch between Table and Grid view)
                    </Typography.Text>
                </div>

                <div>
                    <div>
                        <Title style={{ textAlign: "left", fontSize: "1.7rem" }}>Article Statistics</Title>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px",}}>
                        <ArticleStatistics articles={articles} />
                    </div>
                </div>

                <Divider />
                <Title style={{ textAlign: "left", fontSize: "2rem" }}>Articles</Title>

                {isGridView && gridView}
                {!isGridView && tableView}

                <Pagination current={currentPage} pageSize={pageSize} total={totalArticles} onChange={handlePageChange} showSizeChanger onShowSizeChange={handlePageChange} style={{marginTop: "20px", display: "flex", justifyContent: "center", width: "100%",}}/>
            </div>
        </>
    );
};

export default NewsPage;