import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from"../components/ItemForm";

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
    <div className='home' style={{ display: 'flex', justifyContent: 'center' }}>
        <Header />
        <div className="main-container" style={{ marginTop: '100px' }}>
          <div className="items">
            { items && items.map((item) => {
              console.log(item.title, item.expirationDate);
              return (
                <ItemCard
                  key={item._id}
                  title={item.title}
                  expDate={item.expirationDate}
                />
              )
            })}
          </div>
          {/* <ItemForm></ItemForm> */}
        </div>
    </div>
  )
}

export default Home