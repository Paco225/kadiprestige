import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollPageIndicator from "./components/ScollPageIncdicator";
import PageTransition from "./components/Pagetransition";
import banner from '../app/public/banner.jpg'
import WhatsAppButton from "./components/Whatsapp";

export const metadata = {
  title: "Kadi Prestige",
  description: "Entreprise spécialisée dans la prestation de service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <WhatsAppButton />
        <ScrollPageIndicator />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
