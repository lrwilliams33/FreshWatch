import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Tooltip } from '@mui/material';
import { useItemsContext } from '../../hooks/useItemsContext'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import './ItemCard.css'

const ItemCard = ({ item }) => {
  const {dispatch} = useItemsContext()

  const handleClick = async () => {
    const response = await fetch('/api/items/' + item._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_ITEM', payload: json })
    }
  }

  return (
    <div className="item-details">
      <h4>{ item.title }</h4>
      <p><strong>Expiration Date: </strong>{ formatDistanceToNow(new Date(item.createdAt), { addSuffix: true }) }</p>
      <Tooltip title='Delete Item' arrow>
          <ClearIcon className='delete-icon' onClick={handleClick}></ClearIcon>
      </Tooltip>
    </div>
  )
}

export default ItemCard;