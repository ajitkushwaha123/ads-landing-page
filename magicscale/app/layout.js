import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Magicscale - Restaurant Consultancy Services",
  description:
    "MagicScale Restaurant Consultancy specializes in providing comprehensive solutions to help restaurants achieve scalable growth, operational excellence, and exceptional customer experiences. Whether you're launching a new restaurant, optimizing an existing operation, or expanding to multiple locations, MagicScale offers tailored strategies to meet your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="dpmcab7a29fw9hk1vhwxi6xn0gi9d0"
        />
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '553409800818621');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=553409800818621&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2LEWTKJM30"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2LEWTKJM30');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
