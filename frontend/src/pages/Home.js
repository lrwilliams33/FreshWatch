//components to import into the home page
import ItemCard from "../components/ItemCard/ItemCard";
import ItemForm from"../components/ItemForm";

const Home = () => {
  return (
    <div className='home'>
        <ItemCard />
        <ItemForm></ItemForm>
    </div>
  )
}

export default Home
