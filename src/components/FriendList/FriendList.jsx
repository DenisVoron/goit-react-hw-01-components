import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css["friend-list"]}>
            {friends.map(({id,avatar,name,isOnline}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    status={isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
    ),
}