import "./globals.css";
import type { Metadata } from 'next'
import "../App.css"

export const metadata: Metadata = {
    title: "Andreas Berg portfolio"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
  );
}