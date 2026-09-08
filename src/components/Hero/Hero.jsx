import { useMemo } from 'react';
import heroImage from '../../assets/img/main.png';
import { heroStats } from '../../constants/siteContent';
import { useLanguage, useCopy } from '../../contexts/languageContextObject';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import styles from './Hero.module.css';

/**
 * Builds the rotating text characters for the circular tagline.
 * Each character is rotated by (index * 360 / length) degrees.
 */
function useRotatingTaglineChars(text) {
  return useMemo(() => {
    const chars = text.split('');
    const stepDeg = 360 / chars.length;
    return chars.map((char, i) => ({ char, rotation: i * stepDeg }));
  }, [text]);
}

/** First letter on the accent gradient, rest plain. Works in any alphabet. */
function AccentedWord({ word }) {
  return (
    <>
      <span className={styles.accentLetter}>{word.slice(0, 1)}</span>
      {word.slice(1)}
    </>
  );
}

export function Hero() {
  const { language } = useLanguage();
  const copy = useCopy();
  const taglineChars = useRotatingTaglineChars(copy.rotatingTagline);
  const stats = useMemo(() => heroStats(language), [language]);

  return (
    <section className={styles.home} id="home">
      <div className={styles.heroInfo}>
        <h3 className={styles.heroName}>
          <AccentedWord word={copy.name.first} />{' '}
          <AccentedWord word={copy.name.last} />
        </h3>
        <div className={styles.textAnimate}>
          <h2>{copy.title}</h2>
        </div>
        <h1 className={styles.heroSubtitle}>{copy.subtitle}</h1>
        <div className={styles.heroStats}>
          {stats.map(({ id, iconClass, text }) => (
            <div key={id} className={styles.statItem}>
              <i className={iconClass} aria-hidden />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <SocialLinks />
      </div>
      <div className={styles.imgHero}>
        <img src={heroImage} alt={copy.photoAlt} />
        <div className={styles.rotateText} aria-hidden>
          <div className={styles.rotateTextInner}>
            {taglineChars.map(({ char, rotation }, index) => (
              <b
                key={index}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {char}
              </b>
            ))}
          </div>
          <span className={styles.rotateTextRing}>
            <i />
          </span>
        </div>
      </div>
    </section>
  );
}
