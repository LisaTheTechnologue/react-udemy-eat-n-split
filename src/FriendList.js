import { useState } from "react";

import Friend from "./Friend";
export default function FriendList({ friends, selectedFriend, onSelected }) {
  return (
      <ul>
        {friends.map((friend) => (
         <Friend
            selectedFriend={selectedFriend}
            onSelected={onSelected}
            friend={friend}
            key={friend.id}
          />
        ))}
      </ul>
  );
}
