import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Our Collections',
    Svg: require('../../static/img/opensea.svg').default,
    description: (
      <>
        Explore our collections on Opensea!
      </>
    ),
  },
  {
    title: 'Get Merch!',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Checkout the c0inz.com merch! Get your NFTs on your gear!
      </>
    ),
  },
  {
    title: 'Coming Next',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Check out our upcoming projects!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
