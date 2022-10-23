import css from './Transaction.module.css'
import PropTypes from 'prop-types'
export const Transaction = ({ type, amount, currency }) => {
    return (
       <>
            <th className={css.window}>{type}</th>
            <th className={css.window}>{amount}</th>
            <th className={css.window}>{currency}</th>
    </>
    )
};


Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}