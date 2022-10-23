import { Transaction } from './Transaction'
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
    return (
        <table border="1" width={600} className={css.transaction_history}>
            <thead className={css.headers}>
                <tr>
                    <th className={css.window}>Type</th>
                    <th className={css.window}>Amount</th>
                    <th className={css.window}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency }) => (
                <tr key={id}>
                <Transaction type={type} amount={amount} currency={currency} />
                </tr>
               ))}
            </tbody>
        </table>
    )
};