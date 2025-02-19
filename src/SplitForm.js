import { useState } from "react";
import Button from "./App";
export default function SplitForm({ friend, onUpdateBill }) {
  const [youPay, setYouPay] = useState("");

  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [bill, setBill] = useState("");

  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onUpdateBill(whoIsPaying === "user" ? paidByFriend : -youPay);
  }
  return (
    <form onSubmit={handleSplitBill} className="form-split-bill">
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>👧 You:</label>

      <input
        type="text"
        value={youPay}
        onChange={(e) => {
          setYouPay(
            Number(e.target.value) > bill ? youPay : Number(e.target.value)
          );
        }}
      />

      <label>👫 Friend:</label>

      <input disabled type="text" value={paidByFriend} />

      <label>🤑 Who's paying the bill?:</label>
      <select
        value={pay}
        onChange={(e) => {
          setWhoIsPaying(e.target.value);
        }}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
