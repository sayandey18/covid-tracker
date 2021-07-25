import {memo} from 'react';
import {Twitter, GitHub, Instagram, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://bloggingmetrics.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bloggingmetrics
        </a>
      </div>

      <h5>{t('We Stand With Everyone Fighting On The Frontlines')}</h5>

      <div className="links">
        <a
          href="https://github.com/roboticsayan"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href="https://api.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="https://t.me/mrsayandey"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>

        <a
          href="https://twitter.com/wpblogmetrics"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="https://www.instagram.com/iam.sayandey"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a>

        <a
          href="mailto:sayan@bloggingmetrics.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
