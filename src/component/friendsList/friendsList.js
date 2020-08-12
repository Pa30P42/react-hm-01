import React from 'react';
import FriendsListItem from './friendListItem';
import PropTypes, { object } from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendsListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(object),
};

export default FriendsList;
