import { useEffect, useState } from "react";

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users") // Backend API call
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>Loading users...</p>
        )}
      </ul>
    </div>
  );
}

export default TopUsers;
