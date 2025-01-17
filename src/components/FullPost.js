import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPost = () => {
  const [post, setPost] = useState(null);
  const { full_post } = useParams(); // Get post ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Fetch post data from API when component mounts or when the post ID changes
  useEffect(() => {
    console.log("Fetching post ID:", full_post); // Log the post ID being fetched
    axios.get(`http://localhost:3001/data/${full_post}`)
      .then((response) => {
        console.log("Fetched post data:", response.data); // Log the response data
        setPost(response.data); // Set the post data to state
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Log any errors
      });
  }, [full_post]); // Effect depends on the full_post ID

  const deletePost = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/data/${full_post}`)
      .then(() => {
        console.log("Post deleted successfully!");
        navigate('/'); // Redirect to home page
      })
      .catch((err) => {
        console.log(err);  
      });
  };

  return (
    <div className="center">
      {post ? (
        <>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button className="btn grey" onClick={deletePost}>Delete Post</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FullPost;
