
import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from "../components/ItemForm/ItemForm";

import './Home.css'

import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items');
      const resJson = await response.json();

      if (response.ok) {
        setItems(resJson);
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