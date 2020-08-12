import React from 'react';
import PropTypes, { object } from 'prop-types';
import styles from './transactionHistoryItem.module.css';

const TransactionHistoryItem = ({ transaction }) => {
  return (
    <>
      {transaction.map(tran => (
        <tr className={styles.item} key={tran.id}>
          <td>{tran.type}</td>
          <td>{tran.amount}</td>
          <td>{tran.currency}</td>
        </tr>
      ))}
    </>
  );
};

TransactionHistoryItem.propTypes = {
  transaction: PropTypes.arrayOf(object),
};

export default TransactionHistoryItem;
