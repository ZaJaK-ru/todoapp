import React, { Component } from 'react';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class TodoApp extends Component {
  maxId = 100;

  state = {
    tasksData: [
      this.createTask('Drink coffee'),
      this.createTask('Make App'),
      this.createTask('Have a lunch')
    ],
    tasksFilter: 'all'
  }

  createTask(description) {
    return {
      description: description, 
      created: new Date(), 
      completed: false,
      editing: false, 
      id: this.maxId++
    }
  } 

  addTask = (text) => {
    const newTask = this.createTask(text);

    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newTask];

      return {
        tasksData: newArray
      }
    })
  }

  editTask = (id) => {
    this.setState(({ tasksData }) => {
      const newArray = tasksData.map((task) => {
        const { editing, ...data } = task

        if (task.id === id) {
          return {
            ...data,
            editing: !editing
          }
        }

        return task;
      });

      return {
        tasksData: newArray
      }
    });
  }

  saveEdit = (id, text) => {
    console.log(id, text);

    this.setState(({ tasksData }) => {
      const newArray = tasksData.map((task) => {
        const { editing, ...data } = task

        if (task.id === id) {
          return {
            ...data,
            description: text,
            editing: !editing
          }
        }

        return task;
      });

      return {
        tasksData: newArray
      }
    });
  }

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((task) => task.id === id);
      
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
      const newArray = tasksData.map((task) => {
        const { completed, ...data } = task

        if (task.id === id) {
          return {
            ...data,
            completed: !completed
          }
        }

        return task;
      });

      return {
        tasksData: newArray
      }
    });
  }

  setFilter = (newFilter) => {
    this.setState( ({tasksFilter}) => {
      return {
        tasksFilter: newFilter
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ tasksData }) => {
      const newArray = tasksData.filter(task => !task.completed);
    
      return {
        tasksData: newArray
      }
    })
  }

  render() {
    const { tasksData, tasksFilter } = this.state;

    const completedCount = tasksData
      .filter((task) => !task.completed).length;  
    
    let filteredData = tasksData;

    switch(tasksFilter) {
      case 'active':
        filteredData = tasksData.filter((task) => !task.completed);
        break;
      case 'completed':
        filteredData = tasksData.filter((task) => task.completed);
        break;
      default:
        filteredData = tasksData;
    }

    return (
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <NewTaskForm onItemAdded = { this.addTask }/>
        </header>
        <section className='main'>
          <TaskList 
            tasks = { filteredData }
            onEditing = { this.editTask }
            onDeleted = { this.deleteTask }
            onChecked = { this.checkTask }
            saveEdit = { this.saveEdit } />
          <Footer 
            itemLeft = { completedCount } 
            clearCompleted = { this.clearCompleted }
            setFilter = { this.setFilter }
            currentFilter = { tasksFilter } />
        </section>
      </section>
    );
  }
}
