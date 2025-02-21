"use client";

import React, {useEffect} from 'react';
import '../sass/styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RootLayout({ children }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src="../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
