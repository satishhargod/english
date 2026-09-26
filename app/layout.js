import "./globals.scss";

export const metadata = {
  title: "English Learning - Daily Reading",
  description: "Day wise English reading practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
