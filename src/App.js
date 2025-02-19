import { useState } from "react";
import "./styles.css";
import AddFriend from "./AddFriend";
import FriendList from "./FriendList";
import SplitForm from "./SplitForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/50?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setIsAddFriendOpen((show) => !show);
  }
  function handleAddItem(item) {
    setFriends((items) => [...items, item]);
    setIsAddFriendOpen(false);
  }
  function handleSplitForm(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsAddFriendOpen(false);
  }
  function handleUpdateFriend(value) {
    setFriends((items) =>
      items.map((item) =>
        item.id === selectedFriend.id
          ? { ...item, balance: item.balance + value }
          : item
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div class="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelected={handleSplitForm}
        />
        {isAddFriendOpen && <AddFriend onAddFriend={handleAddItem} />}
        <Button onClick={handleShowAddFriend}>
          {isAddFriendOpen ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitForm
          key={selectedFriend.id}
          friend={selectedFriend}
          onUpdateBill={handleUpdateFriend}
        />
      )}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
