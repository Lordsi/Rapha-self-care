import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rapha Self-Care – Luxury Massage Candles & Body Care',
  description: 'Handcrafted self-care essentials. Candles, bath rituals, and body care for the discerning few.',
  icons: {
    icon: [
      { url: '/assets/favicon_io/favicon.ico' },
      { url: '/assets/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/favicon_io/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@400;500;600&family=Oswald:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
