import { useState } from "react"

const ItemForm = () => {
  return (

   <form>

    <h3>Item and Expiration Date Form</h3>

    <label>Type Item Updated: </label>
    <input type='text'/>

    <label>Enter Expiration Date Updated: </label>
    <input type='date'/>

    <button>Submit</button>
   </form>
  )
}

export default ItemForm

