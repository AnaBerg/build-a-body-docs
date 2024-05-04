import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Building Body',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <div>
        <p>
          &quot;Go to the fucking gym!&quot;
          <br />- Swolenormous
        </p>
      </div>
    ),
  },
  {
    title: 'Building Minds',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <div>
        If you want to understand the <code>TechStack</code> behind
        Build-A-Body, you&apos;ve come to the right place
      </div>
    ),
  },
  {
    title: 'Powered by You',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build-A-Body it&apos;s supposed to be a community, so feel free to join
        in
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
