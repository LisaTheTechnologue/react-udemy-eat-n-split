import { useState } from "react";
import Button from "./App";
export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newItem);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>👫 Friend:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>👩 Image URL:</label>
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
