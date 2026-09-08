import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { BookLink } from './components/BookLink/BookLink';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
        <BookLink />
      </LanguageProvider>
    </ThemeProvider>
  );
}
