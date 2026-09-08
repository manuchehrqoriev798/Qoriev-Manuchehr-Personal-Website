import { BOOK_URL } from '../../constants/siteContent';
import { useCopy } from '../../contexts/languageContextObject';
import styles from './BookLink.module.css';

export function BookLink() {
  const copy = useCopy();

  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.bookLink}
    >
      <i className="bx bx-book-open" aria-hidden />
      <span>{copy.bookLabel}</span>
    </a>
  );
}
