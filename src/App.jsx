import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [product, SetProduct] = useState([]);
  const [fetching, setFetching] = useState(true);
  // const [colour, setColour ] = useState("red")

  useEffect(() => {
    async function trying_to_get_data() {
      try {
        const res = await fetch('https://dummyjson.com/posts');
        const data = await res.json();
        console.log("Data fetched!");
        SetProduct(data.posts); // FIXED: data.posts, not full object
      } catch (err) {
        console.log("Some Error !!!!", err);
      } finally {
        setFetching(false);
      }
    }

    trying_to_get_data();
  }, []); // FIXED: added dependency array

  return (
    <>
      <h1>This is a simple useEffect hook</h1>
      <h1 className='bg-red-700'>Change the colour of the button using this button</h1>
      <button className='p-10 bg-pink-500 '>Click Me To change the colour</button>
      {fetching ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {product.map((post) => (

            <li key={post.id}> {post.title}</li> // FIXED: use post.title
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
