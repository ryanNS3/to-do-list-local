import React from 'react'
import './App.css'
import { Logo } from './assets/Logo'
import { PlusRegular, PlusRegularRose } from './assets/Plus-Regular'
import { Button } from './Components/Button/Button'
import { CardTask } from './Components/CardTask'
import type { taskInterface } from './@Types/taskInterface'




function App() {
  const [tasks, setTasks] = React.useState<any>([])
  const [isEditing, setIsEditing] = React.useState<any>()
  const counterID= React.useRef(0);
 

  function handleAddTask() {
    console.log(counterID)
    setTasks([...tasks, { text: 'Nova tarefa', status: false, id:counterID.current, isEditing: false }])
    counterID.current += 1;
    console.log(tasks)
  }

  function handleEdit({target} : any) {
 
    setTasks((prev: any) => prev.map((task: taskInterface) => {
      if (task.id == target.getAttribute('set-idTarefa')) {
        
        return { ...task, isEditing: !task.isEditing }
      }
      return task
    }))
    console.log(tasks)
   
  }

  function handleChangeStatus({target}){
    
    setTasks((prev: any) => prev.map((task: taskInterface) => {
      console.log(target.id)
      if (task.id == target.id) {
        
        return { ...task, status: !task.status }
      }
      return task
    }))
  }

  function handleDelete({target}){
    setTasks((prev) => prev.filter(task => task.id != target.getAttribute('set-idTarefa')))
    console.log(tasks)

  }

  function handleChangeText({target}){
    setTasks((prev) => prev.map(task => {
      if (task.id == target.getAttribute('set-idTarefa')) {
        
        return { ...task, text: target.value }
      }
      return task
    })) 
  }

  return (
    <div className='pt-20 flex flex-col gap-8   '>
      <section className='flex  items-center w-full gap-2'>
        <Logo/>
        <h1 className='text-lg font-bold text-gray-400' id='title '>To DO List</h1>

      </section>

      <section className='flex flex-col gap-2 max-h-full overflow-y-auto'>
        <section className='flex justify-between w-full gap-4'>
          <div className=' flex gap-2 text-bold  '>
            <p>Tarefas criadas</p>
            <p className='bg-pink-light text-pink-dark rounded-4xl px-2 '>0</p>
          </div>

          <div className=' flex gap-2 text-bold'>
            <p className=' '>Tarefas concluidas</p>
            <p className='bg-green-light text-green-dark rounded-4xl px-2'>0</p>
          </div>

        
        </section>
        <Button onClick={handleAddTask} text='Nova tarefa' icon={<PlusRegularRose/>}/>

        {tasks &&
          tasks.map((task : taskInterface) => {
            return(
              <CardTask 
              id={task.id} 
              text={task.text} 
              status={task.status} 
              isEditing={task.isEditing}
              handleChangeStatus={handleChangeStatus} 
              handleChangeText={handleChangeText} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} />
            )
          })
          
        
        }
      </section>
    </div>
  )
}

export default App