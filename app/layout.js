import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Paper Trading",
  description: "A paper trading platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
