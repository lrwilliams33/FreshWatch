import { useState } from "react"
import { useItemsContext } from "../../hooks/useItemsContext"
import './ItemForm.css'

const ItemForm = () => {
  const { dispatch } = useItemsContext()
  const[title, setTitle] = useState('')
  const[expirationDate, setExpirationDate] = useState('')
  const[error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSetTitle = (e) => {setTitle(e.target.value)}
  const handleSetExpirationDate = (e) => {setExpirationDate(e.target.value)}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const itemDetails={title, expirationDate}
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(itemDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok) {
        setError(null)
        setTitle('')
        setExpirationDate('')
        setEmptyFields([])
        console.log('new item details added', json)
        dispatch({ type: 'CREATE_ITEM', payload: json })
    }
  }

  return (

   <form onSubmit={handleSubmit}>

    <h3>Add An Item</h3>
    <label>Item Name: </label>
    <input 
      type='text' 
      value={title} 
      onChange={handleSetTitle} 
      className={ emptyFields.includes('title') ? 'error' : '' }
    />
    <label>Expiration Date: </label>
    <input 
      type='date' 
      value={expirationDate} 
      onChange={handleSetExpirationDate}
      className={ emptyFields.includes('expirationDate') ? 'error' : '' }
    />
    <button type="submit">+</button>
    {error && <div className="error">{error}</div>}
   </form>
  )
}

export default ItemForm
