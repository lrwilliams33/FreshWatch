import { useState } from "react"

const ItemForm = () => {
  const[title, setTitle] = useState('')
  const[expirationDate, setExpirationDate] = useState('')
  const[error, setError] = useState(null)

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
    }
    if(response.ok) {
        setError(null)
        console.log('new item details added', json)
    }
    setTitle('')
    setExpirationDate('')
  }

  return (

   <form onSubmit={handleSubmit}>

    <h3>Item and Expiration Date Form</h3>

    <label>Type Item: </label>
    <input type='text' value={title} onChange={handleSetTitle} required/>

    <label>Enter Expiration Date Updated: </label>
    <input type='date' value={expirationDate} onChange={handleSetExpirationDate} required/>

    <button type="submit">Submit</button>
   </form>
  )
}

export default ItemForm
