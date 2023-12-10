import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
// import user from '../data/user.json';
// import data from '../data/data.json';
// import friends from '../data/friends.json';

export const App = () => {
  // const { username, tag, location, avatar, stats } = user;

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        {...user}
        // username={username}
        // tag={tag}
        // location={location}
        // avatar={avatar}
        // stats={stats}
      />
      <Statistics title="Upload stats" statsData={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory itemsData={transactions} />
    </div>
  );
};
