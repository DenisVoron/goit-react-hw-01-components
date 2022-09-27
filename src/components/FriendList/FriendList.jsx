import css from "./FriendList.module.css";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
    console.log(friends);
    return (
        <ul className={css["friend-list"]}>
            {friends.map(friend => (
                <>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}
                    />
                </>
            ))}
        </ul>
    );
}