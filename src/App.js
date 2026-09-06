// import logo from "./logo.svg";
// import './App.css';

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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend teman={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ teman }) {
  if (teman.balance === 0) {
    return (
      <li>
        <img src={teman.image} alt={teman.name} />
        <h3>{teman.name}</h3>
      </li>
    );
  }
  return (
    <li>
      <img src={teman.image} alt={teman.name} />
      <h3> {teman.name}</h3>
      {teman.balance < 0 ? (
        <div style={{ color: "red" }}>
          {`bayar ke ${teman.name} sebesar $${Math.abs(teman.balance)}`}
        </div>
      ) : (
        <div style={{ color: "green" }}>
          {`${teman.name} bayar ke kamu $${teman.balance}`}
        </div>
      )}
    </li>
  );
}
