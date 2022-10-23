import css from './FriendListItem.module.css'
import PropTypes from 'prop-types'
export const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <div className={css.item}>
            <span className={`${css.status} ${isOnline ? (css.true) : (css.false)}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name} >{name}</p>
        </div>  
    );
};


FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}