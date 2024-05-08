import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from"../components/ItemForm";

const Home = () => {
  return (
    <div className='home' style={{ display: 'flex', justifyContent: 'center' }}>
        <Header />
        <ItemCard />
        {/* <ItemForm></ItemForm> */}
    </div>
  )
}

export default Home