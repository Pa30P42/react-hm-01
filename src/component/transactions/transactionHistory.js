import React from 'react';
import TransactionHistoryItem from './transactionHistoryItem';
import PropTypes, { object } from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <table className={styles.container}>
        <thead className={styles.listHead}>
          <tr className={styles.listHeadItem}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistoryItem transaction={transactions} />
        </tbody>
      </table>
      ;
    </>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(object),
};

export default TransactionHistory;
