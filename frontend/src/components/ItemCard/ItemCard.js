import ClearIcon from '@mui/icons-material/Clear';
import { Tooltip } from '@mui/material';
import LinearProgressWithLabel from '../LinearProgressWithLabel/LinearProgressWithLabel'
import { useItemsContext } from '../../hooks/useItemsContext'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns'
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

  // const createdAt = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const expirationDate = new Date(item.expirationDate);
  const expirationTimestamp = expirationDate.getTime();
  const isExpired = expirationTimestamp < Date.now();

  const createdAt = new Date(item.createdAt)
  const createdTimestamp = createdAt.getTime();
  const currentTime = Date.now();
  const timeElapsed = Math.max(0, currentTime - createdTimestamp);
  const totalDuration = expirationTimestamp - createdTimestamp;
  const percentExpired = (timeElapsed / totalDuration) * 100
  const finalPercentExpired = (percentExpired > 100) || (expirationTimestamp < createdTimestamp) ? 100 : percentExpired

  return (
    <div className="item-details">
      <div className="left-container">
        <h4>{ item.title }</h4>
        <p>
          <strong className={isExpired ? 'expired-txt' : 'expiring-txt'}>
            { isExpired ? 'Expired ' : 'Expires ' }
          </strong>{ formatDistanceToNow(new Date(item.expirationDate), { addSuffix: true }) }
        </p>
        <p>{ format(item.expirationDate, "MMMM dd, yyyy") }</p>
      </div>
      <div className="middle-container">
        <LinearProgressWithLabel className='progressBar' value={finalPercentExpired}/>
      </div>
      <div className="right-container">
        <Tooltip title='Delete Item' arrow>
            <ClearIcon className='delete-icon' onClick={handleClick}></ClearIcon>
        </Tooltip>
      </div>
    </div>
  )
}

export default ItemCard;