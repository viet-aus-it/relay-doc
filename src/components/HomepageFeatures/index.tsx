import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Keeps iteration quick',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          Relay is data-fetching turned declarative.
          Components declare their data dependencies, without worrying about how to fetch them.
          Relay guarantees that the data each component needs is fetched and available.
          This keeps components decoupled and promotes reuse.
        </p>
        <p>
          With Relay, components and their data dependencies can be quickly modified without modifying other parts of the system.
          That means you won't accidentally break other components as you refactor or make changes to your app.
        </p>
      </>
    ),
  },
  {
    title: 'Automatic optimizations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>
          Relay's compiler aggregates and optimizes the data requirements
          for your entire app, so that they can be efficiently
          fetched in a single GraphQL request.
        </p>
        <p>
          Relay handles the heavy lifting to ensure the data declared by your components
          is fetched in the most efficient way.
          For example, by deduplicating identical fields,
          and precomputing information used at runtime, among other optimizations.
        </p>
      </>
    ),
  },
  {
    title: 'Data consistency',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>
          Relay automatically keeps all of your components up to date when data that
          affects them changes, and efficiently updates them only when strictly necessary.
          This means no unnecessary re-renders.
        </p>
        <p>
          Relay also supports executing GraphQL Mutations, optionally with optimistic updates,
          and updates to local data, while ensuring that visible data on the screen is always kept up to date.
        </p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
