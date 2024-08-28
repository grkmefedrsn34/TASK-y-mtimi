import { Title } from '@mui/icons-material'
import React, { useState } from 'react'

export default function CreateTask(props) {

  const  [task,setTask] = useState({
    title:"",
    content:""
  })

  function detectChange(event){
    //console.log(e.target.value);
    const {name,value} = event.target;

    setTask((prevTask) => {
      return{
        ...prevTask,
        [name]:value
      };
    });
  }

  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title:'',
      content:'',
    })
    event.preventDefault();
  }

  return (
    <div className='todoDivArea' >
      <form className='todoDiv'>
        <input type='text' className='form-control todoText mb-3' name='title' placeholder='Başlık' value={task.title}  onChange={detectChange} />
        <textarea name="content" rows={3} placeholder='İşinizi Yazın' className='form-control todoText mb-3' value={task.content} onChange={detectChange} ></textarea>
        <button className='btn btn-primary todoBATTON' onClick={submitTask}>Ekle</button>
      </form>

    </div>
  )
}
