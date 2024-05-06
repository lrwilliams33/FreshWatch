import { useState } from "react"

const ItemForm = () => {
  return (

   <form>

    <h3>Item and Expiration Date Form</h3>

    <label>Type Item!!!!!!!!!!!!!: </label>
    <input type='text'/>

    <label>Enter Expiration Date: </label>
    <input type='date'/>

    <button>Submit</button>
   </form>
  )
}

export default ItemForm

