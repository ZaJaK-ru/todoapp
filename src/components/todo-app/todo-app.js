import React from 'react';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

const TodoApp = () => {
  const tasksData = [
    {
      description: 'Completed task', 
      created: 'Fri Oct 14 2022 01:32:56 GMT+0300', 
      id: 1
    },
    {
      description: 'Editing task', 
      created: 'Fri Oct 14 2022 00:12:56 GMT+0300', 
      id: 2
    },
    {
      description: 'Active task', 
      created: 'Fri Oct 14 2022 01:14:56 GMT+0300', 
      id: 3
    },
  ];

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className='main'>
        <TaskList tasks={tasksData}/>
        <Footer />
      </section>
    </section>
  );
}

export default TodoApp;