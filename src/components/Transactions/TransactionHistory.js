import React from 'react';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className="">type</th>
        <th className="">amount</th>
        <th className="">currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className="" key={item.id}>
          <td className="">{item.type}</td>
          <td className="">{item.amount}</td>
          <td className="">{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
