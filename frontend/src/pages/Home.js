import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from "../components/ItemForm/ItemForm";
import { useItemsContext } from "../hooks/useItemsContext";
import { useEffect } from "react";
import './Home.css'


const Home = () => {
  const { items, dispatch } = useItemsContext()

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items');
      const resJson = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_ITEMS', payload: resJson })
      }
    }

    fetchItems();
  }, [])

  return (
    <div className="home">
      <div className="items">
        {items && items.map(item => (
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