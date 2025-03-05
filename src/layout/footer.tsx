import React from "react";
import { Layout } from "antd";
import Link from "next/link";

const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "black", padding: "10px 0" }}>
            <nav style={{ width: "100%", textAlign: "center" }}>
                <p style={{ marginTop: "10px" }}> Spark! &copy;2023 Created by Spark!</p>
            </nav>
        </Footer>
    );
};

export default CustomFooter;