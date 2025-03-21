import { useState, useEffect } from "react";

function RealTimeFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feed"); // Backend API ka URL
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    // Har 5 second me naye posts fetch karne ke liye
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Real-time Feed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.user}:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeFeed;

