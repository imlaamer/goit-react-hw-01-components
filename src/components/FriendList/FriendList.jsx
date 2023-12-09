import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export function FriendList({ friendsData }) {
  const { friendList } = css;
  return (
    <ul className={friendList}>
      {friendsData?.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
