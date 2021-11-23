import React, { useState } from 'react'

// let noteList = []

function App() {
  const [noteText, setNoteText] = useState('')
  const [items, setItems] = useState([])

  function handleChange(event) {
    const newText = event.target.value
    setNoteText(newText)
  }

  function handleClick() {
    setItems((prevValue) => [...prevValue, noteText])
    setNoteText('')
    console.log(noteText)
  }

  function displayItems(items) {
    return items.map((item, i) => <li key={i}>{item}</li>)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={noteText} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{displayItems(items)}</ul>
      </div>
    </div>
  )
}
export default App
