import "./globals.css";

export const metadata = {
  title: "randomize.team",
  description: "Shuffle your team members for your next meeting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
