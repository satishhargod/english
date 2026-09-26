import "./globals.scss";

export const metadata = {
  title: "Paramount Academy Sitamau",
  description: "Official website of Paramount Academy Sitamau",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon/android-chrome-192x192.png",
    apple: "/favicon/android-chrome-192x192.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#973481",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}