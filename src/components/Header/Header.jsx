import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <LanguageToggle />
        <span className={styles.divider} aria-hidden />
        <ThemeToggle />
      </div>
    </header>
  );
}
