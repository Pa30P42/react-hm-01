import React from 'react';
import PropTypes from 'prop-types';
import styles from './user.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="user avatar"
            className={styles.img}
            height="100"
            width="100"
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.list}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

// Profile.defaultProps = {
//   name: 'Uses Name',
//   avatar:
//     'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
//   tag: 'Tag',
//   location: 'Location',
// };

export default Profile;
