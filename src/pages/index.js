import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Typed from 'typed.js';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React, { useRef, useEffect } from 'react';

import '../css/custom.css';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["", "Ubunchuu Trường Ú", "Ubuntu Ninjas", "Linux Lover", "One"],
      typeSpeed: 100,
      backSpeed: 65,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="hero__codeblock">We are <span ref={typedElement} className="hero__typing_effect" /></div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg btn-primary"
            to="/docs/linux-overview/gioi-thieu-linux">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={null}
      description="Một project 'Lai nú' giấu tên tại trường Ú hứa hẹn giúp mọi người bước đầu tiếp cận với Linux, đặc biệt là Ubuntu cùng cách thiết lập chúng như một pro developer.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
