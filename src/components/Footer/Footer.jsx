import { useCopy } from '../../contexts/languageContextObject';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export function Footer() {
  const copy = useCopy();

  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.copyrightSymbol}>©</span>{' '}
        <span>{currentYear}</span> {copy.name.first} {copy.name.last}. {copy.rights}
      </p>
    </footer>
  );
}
