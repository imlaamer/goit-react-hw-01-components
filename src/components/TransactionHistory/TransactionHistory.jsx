import css from './TransactionHistory.module.css';
import { toUpperCaseFirstLetter } from 'helpers/toUpperCaseFirstLetter';

export function TransactionHistory({ itemsData }) {
  const { transactionTable, tableTitle, tableItem, tableBox } = css;
  return (
    <div className={tableBox}>
      <table className={transactionTable}>
        <thead className={tableTitle}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {itemsData?.map(({ id, type, amount, currency }) => (
            <tr key={id} className={tableItem}>
              <td>{toUpperCaseFirstLetter(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
