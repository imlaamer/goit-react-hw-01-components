import css from './FriendListItem.module.css';

export function FriendListItem({
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name,
  isOnline = false,
}) {
  const { item, status, friendAvatar, friendName } = css;
  const onlineStyles = {
    backgroundColor: isOnline ? 'green' : 'red',
  };

  return (
    <>
      <li className={item}>
        <span className={status} style={onlineStyles}></span>
        <img
          className={friendAvatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={friendName}>{name}</p>
      </li>
    </>
  );
}
