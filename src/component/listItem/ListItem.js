import React from 'react';

const ListItem = ({ item }) => {
  return (
    <li>
      <h2>{item.name}</h2>
      <img src={item.avatar} alt="/" width={200} />
    </li>
  );
};

ListItem.defaultProps = {
  item: {
    avatar:
      'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  },
};

// ListItem.propTypes = {
//     name: Prop
// }

export default ListItem;
