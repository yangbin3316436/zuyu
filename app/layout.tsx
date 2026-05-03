import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "天上人间洗浴中心官方网站",
  description:
    "天上人间洗浴中心官方网站，提供温泉泡汤、汗蒸理疗、足道养护、芳香SPA、餐饮茶歇与客房休憩服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
