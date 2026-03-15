export const metadata = {
  title: "HSK Path",
  description: "Learn Chinese and prepare for HSK exams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{fontFamily: "Arial, sans-serif"}}>
        {children}
      </body>
    </html>
  );
}
