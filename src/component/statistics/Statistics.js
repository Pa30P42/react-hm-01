import React from 'react';
import PropTypes, { object } from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={styles.sections}>
        {title ? <h2 className={styles.title}>{title}</h2> : ''}
        <ul className={styles.list}>
          {stats.map(stat => (
            <li
              className={styles.item}
              key={stat.id}
              style={{
                backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(
                  16,
                )}`,
              }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage} %</span>
            </li>
          ))}
        </ul>
        {/* <li className="item">
            <span className="label"></span>
            <span className="percentage"></span>
          </li>
          <li className="item">
            <span className="label"></span>
            <span className="percentage"></span>
          </li> */}
      </section>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(object),
  titile: PropTypes.string,
};

export default Statistics;
