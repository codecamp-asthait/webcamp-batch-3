import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function AddTaskForm({ handleAddTask }) {
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const { theme , themeDispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  }

  const handleAddButtonClick = () => {
    if(inputValue.trim() !== ""){
      handleAddTask(inputValue);
      setInputValue("");
    }else{
      alert("Please enter a task")
    }
  };

  console.log("theme in add task form" , theme);

  return (
    <>
      <input type="text" placeholder='Add your Task' value={inputValue} onChange={handleInputChange}  />
      <button onClick={handleAddButtonClick}>Add</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}
