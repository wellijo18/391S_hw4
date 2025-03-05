import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Header } = Layout;

const CustomHeader = () => {
    const router = useRouter();

    return (
        <Header style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
            <nav style={{ width: "100%" }}>
                <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "20px" }}>
                    <li style={{ backgroundColor: router.pathname === "/" ? "green" : "transparent", padding: "10px", borderRadius: "5px", height: "100%" }}>
                        <Link href="/" style={{ color: router.pathname === "/" ? "white" : "inherit" }}>Home</Link>
                    </li>
                    <li style={{ backgroundColor: router.pathname === "/news" ? "green" : "transparent", padding: "10px", borderRadius: "5px", height: "100%" }}>
                        <Link href="/news" style={{ color: router.pathname === "/news" ? "white" : "inherit" }}>News</Link>
                    </li>
                    <li style={{ backgroundColor: router.pathname === "/about" ? "green" : "transparent", padding: "10px", borderRadius: "5px", height: "100%" }}>
                        <Link href="/about" style={{ color: router.pathname === "/about" ? "white" : "inherit" }}>About</Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
};

export default CustomHeader;