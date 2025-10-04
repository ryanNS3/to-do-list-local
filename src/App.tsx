import React from 'react'
import './App.css'
import { Logo } from './assets/Logo'
import { PlusRegular, PlusRegularRose } from './assets/Plus-Regular'
import { Button } from './Components/Button/Button'
import { CardTask } from './Components/CardTask'




function App() {
  const [tasks, setTasks] = React.useState([])

  function handleAddTask() {
    setTasks([...tasks, "Nova tarefa"])
    console.log(tasks)
  }

  return (
    <div className='pt-20 flex flex-col gap-8   '>
      <section className='flex  items-center w-full gap-2'>
        <Logo/>
        <h1 className='text-lg font-bold text-gray-400' id='title '>To DO List</h1>

      </section>

      <section className='flex flex-col gap-2'>
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
          tasks.map((task) => {
            return(
              <CardTask/>
            )
          })
          
        
        }
      </section>
    </div>
  )
}

export default App