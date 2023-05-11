import "./globals.css";

export const metadata = {
  title: "Teamgenerator",
  description: "Divide your team into grous or pick a member at random.",
  keywords: "team, generator, random, groups",
  authors: { name: "Jonathan Wieben", url: "https://jonathanwieben.com/" },
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
