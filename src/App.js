import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleCheck,faPen,faTrashCan
 } from '@fortawesome/free-solid-svg-icons'
function App() {
  const[todo,setTodo]=useState([
   { "id":1,"title":"Task 1","status":false},
   {"id":2,"title":"Task 2","status":false}
  ]);
  const[newTask,setnewTask]=useState("");
  const[updateData,setupdateData]=useState("");
  
  
  const addTask =()=>{
    if (newTask){
      let num =todo.lengh+1;
      let newentry ={id:num,title:newTask,status:false}
      setTodo([...todo,newentry])
      setnewTask(' ');
    }
  }
  const deleteTask =(id) =>{
    let newTasks = todo.filter
    (Task =>Task.id !== id)
    setTodo(newTasks);
    
  }
  const markDone =(id) =>{
    let newTask =todo.map(Task =>{
      if (Task.id === id) {
        return({...Task,status :!Task.status})
      }
      return Task;
    

    })
    setTodo(newTask);
  
    
  }
  const cancelupdate =(id) =>{
    setupdateData('');
    
  }
  const changeTask =(e) =>{
    let newentry ={
      id:updateData.id,
      title: e.target.value,
      status:updateData.status ? true: false
    
    } 
    setupdateData(newentry);
    
  }
  const updateTask =(e) =>{
    let filterRecords= [...todo].filter(Task => Task.id!== updateData.id);
    let updateobject =[...filterRecords,updateData]
    setTodo(updateobject);
    setupdateData('');
    
  }
  return (
    <div className="container App">
      <br/> <br/>
      <h2>Todo list </h2>
      <br/> <br/>
    
    {updateData && updateData ? (
      <>
     <div className="row">
      <div className="col">
      <input
      value={updateData && updateData.title}
      onChange={(e) =>changeTask (e) }
      className = "form-control form-control-lg"/>
      </div>
      <div className="col-auto">
      <button
      onClick={updateTask}
            className ="btn btn-lg btn-success mr-20">
              upadate </button>
            <button
             onClick={cancelupdate}
            className ="btn btn-lg btn-warning">
              cancel
            </button>
      </div>
      </div>
      <br/>
      </>
    ):(
      <>
      <div className="row">
        <div className="col">
          <input
          value={newTask}
          onChange={(e)=>setnewTask(e.target.value)}
          className = "form-control form-control-lg"/>
          </div>
          <div className ="col-auto">
            <button
            onClick={addTask}
            className ="btn btn-lg btn-success">
              Add
            </button>
            </div>
            </div>
            <br/>
      </>
    )}
   
      {todo && todo.length ?'':'No Tasks...'}

      {todo && todo
      .sort((a ,b) =>a.id > b.id ? 1 :-1)
      .map((Task, index) =>{
        return(
          <React.Fragment key={Task.id}>
            <div className="col taskBg">
              <div className={Task.status ?'done':''}>

            <span className="TaskNumber">{index +1} </
            span>
            <span className="Tasktext">{Task.title} </
            span>
            </div>
            <div className="iconswarp">
              
                <span title="completetd/ Not completed"
                onClick={(e) => markDone (Task.id)}
                >
                 <FontAwesomeIcon icon = {faCircleCheck}/>
                 </span>
                 {Task.status? null:(
                <span title="Edit"
                onClick={() => setupdateData({
                  id:Task.id,
                  title:Task.title,
                  status:Task.status ?true: false
                })
                }
                
                > 
                
                
                  <FontAwesomeIcon icon ={faPen}/></span> )}
                <span title="Delete"
                onClick={()=> deleteTask (Task.id)}
                > 
                  <FontAwesomeIcon icon ={faTrashCan}/>
                  </span>
                
               </div>
              </div>
            
          </React.Fragment>

        )
      })
    }
 
    
    </div>
  );
}


export default App;
