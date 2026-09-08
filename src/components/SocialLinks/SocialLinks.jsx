import { SOCIAL_LINKS } from '../../constants/siteContent';
import styles from './SocialLinks.module.css';

export function SocialLinks() {
  return (
    <div className={styles.socialMedia} aria-label="Social links">
      {SOCIAL_LINKS.map(({ id, href, iconClass, label }) => {
        const isExternal = !href.startsWith('mailto:');
        return (
          <div key={id} className={styles.bgIcon}>
            <a
              href={href}
              {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
              aria-label={label}
            >
              <i className={iconClass} aria-hidden />
            </a>
            <span aria-hidden />
          </div>
        );
      })}
    </div>
  );
}
