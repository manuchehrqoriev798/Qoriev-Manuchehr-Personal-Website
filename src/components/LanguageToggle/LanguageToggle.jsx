import { LANGUAGES } from '../../constants/siteContent';
import { useLanguage, useCopy } from '../../contexts/languageContextObject';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = useCopy();

  return (
    <div className={styles.group} role="group" aria-label={copy.switchToLanguage}>
      {LANGUAGES.map((code) => {
        const isActive = code === language;
        return (
          <button
            key={code}
            type="button"
            className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
            onClick={() => setLanguage(code)}
            aria-pressed={isActive}
            lang={code}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
