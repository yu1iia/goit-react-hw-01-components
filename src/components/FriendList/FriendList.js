import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

// FriendList.defaultProps = {
//   title: PropTypes.string,
// };

FriendList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }).isRequired,
  ),
};

export default FriendList;
