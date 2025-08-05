import { useState } from 'react'
import Navbar from '../components/navbar'
// watch 33:00


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{
    
  }
  const handleAdd = ()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id)
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    console.log(index)
    let newtodos = todos;
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newtodos)
  }
  
  

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">
      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-80'/>
        <button onClick={handleAdd} className='bg-violet-600 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todo</h2>
      <div className="todos">
        {todos.map(item=>{

        return <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
          <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}/>
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-violet-600 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
            <button onClick={handleDelete} className='bg-violet-600 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
          </div>

        </div>
        })}
      </div>

    </div>

    
    </>
  )
}

export default App
