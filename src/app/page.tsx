"use client"

import React, { useState } from "react"
export default function Home() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedPendingTask, setSelectedPendingTask] = useState<string | null>(null);
  const [inProgressTasks, setInProgressTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    const newTask = prompt('Por favor, ingresa la nueva tarea:');
    if (newTask !== null && newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
    }
  };

  const handleAddTaskInProgress = () => {
    const selectedTask = prompt('Selecciona una tarea pendiente para poner en progreso:\n\n' + tasks.join('\n'));

    if (selectedTask !== null && selectedTask.trim() !== '') {
      if (tasks.includes(selectedTask)) {
        setTasks(tasks.filter(task => task !== selectedTask));
        setInProgressTasks([...inProgressTasks, selectedTask]);
      } else {
        alert('La tarea seleccionada no es válida.');
      }
    }
  };

  const handleAddTaskComplete = () => {
    const selectedTask = prompt('Selecciona una tarea en progreso para marcar como completada:\n\n' + inProgressTasks.join('\n'));

    if (selectedTask !== null && selectedTask.trim() !== '') {
      if (inProgressTasks.includes(selectedTask)) {
        setInProgressTasks(inProgressTasks.filter(task => task !== selectedTask));
        setCompletedTasks([...completedTasks, selectedTask]);
      } else {
        alert('La tarea seleccionada no es válida o no está en progreso.');
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8" style={{ fontFamily: 'monospace' }}>
      <div>
        <header className="flex flex-row gap-96">
          <h1 className="flex justify-center text-4xl border-b">Task</h1>
          <nav className="">
            <ul className="flex flex-row gap-10">
              <li className="flex justify-center border-transparent rounded-full p-2 w-20" style={{
                boxShadow: '0 0 10px #fff',
                cursor: 'pointer'
              }}>Home</li>
              <li className="flex justify-center border-transparent rounded-full p-2 w-20" style={{
                boxShadow: '0 0 10px #fff',
                cursor: 'pointer'
              }}>Task</li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="">

        <div className="flex flex-col items-center gap-10">
          <div className="">
            <h1 className="text-[40px] border-b">Task Menu</h1>
          </div>
          <div className="flex flex-row gap-20">

            {/* Pending Tasks */}
            <div className="flex flex-col items-center bg-transparent border-transparent rounded-[20px] h-[300px] w-[300px]" style={{
              boxShadow: '0 0 10px #fff'
            }}>
              <div className="flex w-full justify-center items-center p-2">
                <span className="flex w-full justify-center p-2 bg-gray-700 rounded-[20px]">Pending Tasks</span>
              </div>

              <div className="bg-red-500 h-[200px] w-[280px] rounded-[20px]">
                {tasks.map((task, index) => (
                  <div key={index} className="p-1">
                    {task}
                  </div>
                ))}
              </div>

              <div className="p-4">
                <button onClick={handleAddTask} className="flex justify-center items-center border-transparent rounded-full w-40 h-8" style={{ boxShadow: '0 0 10px #fff' }}>
                  <span>Add task</span>
                </button>
              </div>
            </div>

            {/* Tasks in progress */}
            <div className="flex flex-col items-center bg-transparent border-transparent  rounded-[20px] h-[300px] w-[300px]" style={{
              boxShadow: '0 0 10px #fff'
            }}>
              <div className="flex w-full justify-center p-2">
                  <span className="flex justify-center p-2 rounded-full w-full bg-red-700">Tasks in progress</span>
              </div>

              <div className="bg-red-500 h-[200px] w-[280px] rounded-[20px]">
                {inProgressTasks.map((task, index) => (
                  <div key={index} className="p-1">
                    {task}
                  </div>
                ))}
              </div>

              <div className="p-4">
                <button onClick={handleAddTaskInProgress} className="flex justify-center items-center border-transparent rounded-full w-40 h-8" style={{
                  boxShadow: '0 0 10px #fff'
                }}> <span>Add task progresing</span></button>
              </div>
            </div>

            {/* Tasks completed */}
            <div className="flex flex-col items-center bg-transparent border-r-transparent  rounded-[20px] h-[300px] w-[300px]" style={{
              boxShadow: '0 0 10px #fff'
            }}>
              <div className="flex w-full justify-center p-2">
                <span className="flex justify-center p-2 rounded-full w-full bg-green-700">Tasks completed</span>
              </div>

              <div className="bg-red-500 h-[200px] w-[280px] rounded-[20px]">
                {completedTasks.map((task, index) => (
                  <div key={index} className="p-1">
                    {task}
                  </div>
                ))}
              </div>

              <div className="p-4">
                <button onClick={handleAddTaskComplete} className="flex justify-center items-center border-transparent rounded-full w-40 h-8" style={{
                  boxShadow: '0 0 10px #fff',
                }}><span>Add task finish</span></button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  )
}


