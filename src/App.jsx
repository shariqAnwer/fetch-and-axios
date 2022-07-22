import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  //using AXIOS
  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data);
      setLoading(false);
    };
    loadUser();
  }, []);

  //using FETCH
  // useEffect(() => {
  //   const loadUser = () => {
  //     setLoading(true);
  //     return fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoading(false);
  //         setUser(data);
  //       })
  //       .catch(() => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   };
  //   loadUser();
  // }, []);
  // console.log(user);

  //SORTING THE DATA LIST
  const sortByNameAsc = () => {
    const sortNames = [...user];
    sortNames.sort((a, b) => (a.name > b.name ? 1 : -1));
    setUser(sortNames);
  };
  const sortByNameDsc = () => {
    const sortNames = [...user];
    sortNames.sort((a, b) => (a.name > b.name ? -1 : 1));
    setUser(sortNames);
  };
  const sortByNameLengthDsc = () => {
    const sortNames = [...user];
    sortNames.sort((a, b) => (a.name.length > b.name.length ? -1 : 1));
    setUser(sortNames);
  };
  const sortByNameLengthAsc = () => {
    const sortNames = [...user];
    sortNames.sort((a, b) => (a.name.length > b.name.length ? 1 : -1));
    setUser(sortNames);
  };
  return (
    <div className="App">
      <h1>fetch vs axios</h1>
      {loading
        ? "Loading..."
        : user.map((item) => (
            <h5 key={item.id}>
              {item.name}- {item.name.length}
            </h5>
          ))}
      <button onClick={sortByNameAsc} style={{ background: "teal" }}>
        Sort by Name ASC
      </button>
      <button onClick={sortByNameDsc} style={{ background: "teal" }}>
        Sort by Name DSC
      </button>
      <button onClick={sortByNameLengthAsc} style={{ background: "teal" }}>
        Sort by Name Length ASC
      </button>
      <button onClick={sortByNameLengthDsc} style={{ background: "teal" }}>
        Sort by Name Length DSC
      </button>
    </div>
  );
}

export default App;
