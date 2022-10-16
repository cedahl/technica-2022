import React, {useState} from "react";
import axios from "axios";

function Data() {
  const [user, setUser] = useState("");

  function getData() {
    axios.get("http://localhost:5000/", { crossdomain: true}).then(response => {
      setUser(response.data.user);
    });
  }

  return (
    <div>
      <button onClick={getData}>
        Get user
      </button>
      <h1>{user}</h1>
    </div>
  )
}

export default Data;
