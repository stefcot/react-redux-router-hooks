import React from 'react';
import ie from 'ie-version';

import SvgLogo from 'images/logo.svg';

const styles = require('./Logo.skin');

const Logo = () => (
  <h1
    className={styles['root']}
    itemScope="http://schema.org/Organization"
    itemType=""
  >
    <a href="/index.php?page=accueil" itemProp="url" title="Retour à l'accueil">
      {ie.version && ie.version <= 8 && (
        <span
          dangerouslySetInnerHTML={{
            __html:
              '<!--[if lt IE 9]>\n' +
              '<img class="ie8-hidden" src="file-loader!../assets/images/logo.png" alt="Site d\'actualité le Point" height="86" width="256" itemprop="logo">\n' +
              '<![endif]-->'
          }}
        />
      )}
      {((ie.version && ie.version > 8) || !ie.version) && (
        <img
          alt="Site d'actualité le Point"
          height="86"
          itemProp="logo"
          src={SvgLogo}
          width="196"
        />
      )}
      {((ie.version && ie.version > 8) || !ie.version) && (
        <span className={styles['category']} style={{ display: 'none' }}>
          International
        </span>
      )}
    </a>

    <span content="https://www.facebook.com/lepoint.fr" itemProp="sameas" />
    <span content="https://www.twitter.com/lepoint" itemProp="sameas" />
    <span content="https://plus.google.com/+LePointfr" itemProp="sameas" />
    <span
      content="https://www.linkedin.com/company/le-point"
      itemProp="sameas"
    />
  </h1>
);

export default Logo;
