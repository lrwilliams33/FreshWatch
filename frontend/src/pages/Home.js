import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from "../components/ItemForm/ItemForm";
import { useItemsContext } from "../hooks/useItemsContext";
import {useAuthContext} from '../hooks/useAuthContext'
import { useEffect, useState } from "react";
import SearchBar from './../components/SearchBar/SearchBar'
import './Home.css'
import ICalendarGenerator from "../components/ICalendarGenerator/ICalendarGenerator";


const Home = () => {
  const { items, dispatch } = useItemsContext()
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const resJson = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_ITEMS', payload: resJson })
      }
    }
    if (user){
      fetchItems();
    }
  }, [dispatch, user])

  // searchbar filter
  const filteredItems = items && items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    
      if (!response.ok) {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <div className="home">
      <div className="items">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {items && items.length === 0 && <h2>No items to display</h2>}
        {items && filteredItems.map((item) => (
            <ItemCard 
              item={item} 
              key={item._id} 
            />
        ))}
      </div>
      <ItemForm />
      <ICalendarGenerator />
      <button onClick={sendMail}>Send Email</button>
    </div>
  )
}

export default Home