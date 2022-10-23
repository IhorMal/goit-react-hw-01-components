import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item} key={id}>
                    <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

