import { useState, useEffect } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './todo-app.css';

export default function TodoApp() {
  let maxId = 100;

  function createTask(description, timer) {
    return {
      description,
      timer,
      timerCounting: false,
      created: new Date(),
      completed: false,
      editing: false,
      id: maxId++,
    };
  }

  const [tasksData, setTasksData] = useState([
    createTask('Drink coffee', 200),
    createTask('Make App', 300),
    createTask('Have a lunch', 400),
  ]);

  const [tasksFilter, setTasksFilter] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      const newArray = tasksData.map((task) => {
        if (task.timerCounting) {
          const newTimer = task.timer > 0 ? task.timer - 1 : 0;
          return { ...task, timer: newTimer };
        }
        return task;
      });

      setTasksData(newArray);
    }, 1000);

    return () => clearInterval(interval);
  }, [tasksData]);

  const addTask = (label, timer) => {
    const newTask = createTask(label, timer);
    setTasksData([...tasksData, newTask]);
  };

  const editTask = (id) => {
    const newArray = tasksData.map((task) => {
      const { editing, ...data } = task;

      if (task.id === id) {
        return {
          ...data,
          editing: !editing,
        };
      }

      return task;
    });

    setTasksData(newArray);
  };

  const saveEdit = (id, text) => {
    const newArray = tasksData.map((task) => {
      const { editing, ...data } = task;

      if (task.id === id) {
        return {
          ...data,
          description: text,
          editing: !editing,
        };
      }

      return task;
    });

    setTasksData(newArray);
  };

  const deleteTask = (id) => {
    const idx = tasksData.findIndex((task) => task.id === id);
    const newArray = [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)];
    setTasksData(newArray);
  };

  const checkTask = (id) => {
    const newArray = tasksData.map((task) => {
      const { completed, ...data } = task;

      if (task.id === id) {
        return {
          ...data,
          completed: !completed,
        };
      }

      return task;
    });

    setTasksData(newArray);
  };

  const setFilter = (newFilter) => {
    setTasksFilter(newFilter);
  };

  const clearCompleted = () => {
    setTasksData(tasksData.filter((task) => !task.completed));
  };

  const timerStartStop = (id) => {
    const newArray = tasksData.map((task) => {
      const { timerCounting, ...data } = task;

      if (task.id === id) {
        return {
          ...data,
          timerCounting: !timerCounting,
        };
      }

      return task;
    });

    setTasksData(newArray);
  };

  const completedCount = tasksData.filter((task) => !task.completed).length;

  const filteredData = (items, filter) => {
    if (filter === 'all') return items;
    return items.filter(({ completed }) => (filter === 'active' ? !completed : completed));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addTask} />
      </header>
      <section className="main">
        <TaskList
          tasks={filteredData(tasksData, tasksFilter)}
          onEditing={editTask}
          onDeleted={deleteTask}
          onChecked={checkTask}
          saveEdit={saveEdit}
          timerStartStop={timerStartStop}
        />
        <Footer
          itemLeft={completedCount}
          clearCompleted={clearCompleted}
          setFilter={setFilter}
          currentFilter={tasksFilter}
        />
      </section>
    </section>
  );
}
