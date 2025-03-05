import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";

interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  const columns = [
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
  ];

  return (
      <Table dataSource={articles} columns={columns} rowKey="id" loading={loading} pagination={{pageSize: 10, showSizeChanger: true,}}/>
  );
};

export default ArticleTable;