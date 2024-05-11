import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from "../components/ItemForm/ItemForm";
import { useItemsContext } from "../hooks/useItemsContext";
import {useAuthContext} from '../hooks/useAuthContext'
import { useEffect, useState } from "react";
import SearchBar from './../components/SearchBar/SearchBar'
import './Home.css'


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

  const filteredItems = items && items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    </div>
  )
}

export default Home