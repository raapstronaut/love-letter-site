import "./globals.css";

export const metadata = {
  title: "Untuk Kamu",
  description: "Website kecil untuk kita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}