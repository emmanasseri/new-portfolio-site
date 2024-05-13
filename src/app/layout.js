"use client";


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Emma Nasseri</title>
        <meta name="description" content="Emma Nasseri's portfolio" />
        {/* Include any global styles here */}
      </head>
    
        <body>{children}</body>

    </html>
  );
};

export default RootLayout;
