import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
// watch 33:00

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() =>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)}
  },[])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }
  const toggleFinished =(e) => {
    setshowFinished(!setshowFinished)

  }
  

  const handleEdit = (e, id)=>{
    let t = todo.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()


  }
  const handleDelete = (e, id )=>{
    let newtodos = todos.filter(item=>{
      return item.id!==id
    });
   setTodos(newTodos)
   saveToLS()
    
  }
  const handleAdd = ()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  
  

  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">
      <div className="addTodo">
        <h2 className='text-lg font-bold'>Add Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-80'/>
        <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-600 disabled:bg-violet-700 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
      </div>
      <input onChange={toggleFinished} type="checkbox" checked ={showFinished}/> show finished
      <h2 className='text-lg font-bold'>Your Todo</h2>
      <div className="todos">
        {todos.length === 0 && <div className='m-5'>No Todos To Display</div> }
        {todos.map(item=>{

        return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
          <div className='flex gap-5'>

          <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}/>
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-600 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-600 hover:bg-violet-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
          </div>

        </div>
        })}
      </div>

    </div>

    
    </>
  )
}

export default App
