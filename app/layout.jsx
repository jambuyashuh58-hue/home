// app/layout.jsx
export const metadata = {
  title: "HomeFit Solutions",
  description: "Turnkey home fitout packages with instant quotation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts used by your HomeFit UI */}
        https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Lato:wght@400;700&display=swap
        <style>{`
          * { box-sizing: border-box; }
          html, body { height: 100%; }
          body {
            margin: 0;
            background: #fff;         /* keep site background white */
            color: #0B1F3A;           /* CL.navy */
            font-family: 'Lato','Helvetica Neue',sans-serif;
          }
          a { color: inherit; text-decoration: none; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
