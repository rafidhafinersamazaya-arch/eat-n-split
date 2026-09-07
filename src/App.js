// import logo from "./logo.svg";
// import './App.css';

import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
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
  const [showAddFriend, setShowAddFriend] = useState(false);
  // const [showSplitBill, setShowSplitBill] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  // function handleShowSplitBill() {
  //   setShowSplitBill(!showSplitBill);
  // }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddItem={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend teman={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ teman }) {
  return (
    <li>
      <img src={teman.image} alt={teman.name} />
      <h3>{teman.name}</h3>
      <p
        style={{
          color:
            teman.balance < 0 ? "red" : teman.balance > 0 ? "green" : "black",
        }}
      >
        {teman.balance === 0 &&
          `kamu & ${teman.name} aman $${Math.abs(teman.balance)}`}
        {teman.balance < 0 &&
          `bayar ke ${teman.name} sebesar $${Math.abs(teman.balance)}`}
        {teman.balance > 0 && `${teman.name} bayar ke kamu $${teman.balance}`}
      </p>
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

function FormAddFriend({ onAddItem }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!image || !name) return;

    const id = crypto.randomUUID();

    const newFriends = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriends);

    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddItem(newFriends);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <div className="sidebar">
        <label>friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </div>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with Clark</h2>

      <label>bill value</label>
      <input type="text"></input>

      <label>your expense</label>
      <input type="text"></input>

      <label>X's expense</label>
      <input type="text" disabled value="0"></input>

      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}
