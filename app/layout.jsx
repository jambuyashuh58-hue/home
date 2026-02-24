export const metadata = {
  title: 'HomeFit Solutions',
  description: 'Turnkey home fitout packages with instant quotation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}
