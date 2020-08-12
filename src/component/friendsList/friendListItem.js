import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendsListItem = ({ friend }) => {
  return (
    <>
      <li className={styles.item} key={friend.id}>
        <span
          className={styles.status}
          style={
            friend.isOnline
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' }
          }
        ></span>
        <img
          className={styles.img}
          src={friend.avatar}
          alt="avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    </>
  );
};

FriendsListItem.propTypes = {
  frined: PropTypes.object,
};

export default FriendsListItem;
