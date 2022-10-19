import React, { Component } from 'react';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class TodoApp extends Component {
  state = {
    tasksData: [
      {
        description: 'Completed task', 
        created: 'Fri Oct 14 2022 01:32:56 GMT+0300',
        completed: false, 
        id: 1
      },
      {
        description: 'Editing task', 
        created: 'Fri Oct 14 2022 00:12:56 GMT+0300', 
        completed: false, 
        id: 2
      },
      {
        description: 'Active task', 
        created: 'Fri Oct 14 2022 01:14:56 GMT+0300', 
        completed: false, 
        id: 3
      },
    ]
  }

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...tasksData.slice(0, idx),
        ...tasksData.slice(idx + 1)
      ];

      return {
        tasksData: newArray
      }
    });
  }

  checkTask = (id) => {
    this.setState(({ tasksData }) => {
      const newArray = tasksData.map((item) => {
        const { completed, ...data } = item

        if (item.id === id) {
          return {
            ...data,
            completed: !completed
          }
        }

        return item;
      });

      return {
        tasksData: newArray
      }
    });
  }

  render() {
    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className='main'>
          <TaskList 
            tasks = { this.state.tasksData }
            onDeleted = { this.deleteTask }
            onChecked = { this.checkTask } />
          <Footer />
        </section>
      </section>
    );
  }
}
