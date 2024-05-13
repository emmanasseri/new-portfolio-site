import { Inter } from "next/font/google";
import Chakra from "./chakra";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can include meta tags, title, and other head elements here */}
        <title>Emma Nasseri</title>
        <description>Emma Nasseri's portfolio</description>
      </head>
      <body>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}
