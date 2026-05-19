import "./globals.css";

export const metadata = {
  title: "mutyaaa",
  description: "Website kecil untuk kita",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}