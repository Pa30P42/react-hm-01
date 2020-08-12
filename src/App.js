import React from 'react';
import Profile from './component/user/user';
import user from './component/data/user.json';
import Statistics from './component/statistics/Statistics';
import statistics from './component/data/statistics.json';
import FriendsList from './component/friendsList/friendsList';
import friends from './component/data/friends.json';
import TransactionHistory from './component/transactions/transactionHistory';
import transactions from './component/data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statistics} title="Upload Stats" />

      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
