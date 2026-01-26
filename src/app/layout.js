import "./globals.css"; // Make sure your Tailwind CSS is imported here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}