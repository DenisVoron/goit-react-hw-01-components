import css from './FriendListItem.module.css';


export const FriendListItem = ({avatar, name, status}) => {
    return (
        <li className={css.item}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};