import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from "../components/ItemForm/ItemForm";
import { useItemsContext } from "../hooks/useItemsContext";
import { useEffect, useState } from "react";
import SearchBar from './../components/SearchBar/SearchBar'
import './Home.css'


const Home = () => {
  const { items, dispatch } = useItemsContext()
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items');
      const resJson = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_ITEMS', payload: resJson })
      }
    }

    fetchItems();
  }, [dispatch])

  const filteredItems = items && items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    
      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // const data = await response.json();
      //   console.log(data.message);
    } catch (error) {
      console.error('Error:', error.message);
      console.error('Error:');
    }
  }

  return (
    <div className="home">
      <div className="items">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {items && filteredItems.map((item) => (
            <ItemCard 
              item={item} 
              key={item._id} 
            />
        ))}
      </div>
      <ItemForm />
      <button onClick={sendMail}>Send Email</button>
    </div>
  )
}

export default Home