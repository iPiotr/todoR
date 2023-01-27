import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import Todo from './components/Todo';
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

import "./style.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todos2, setTodos2] = useState([]);
  const [input, setInput] = useState('');
  const doneTodos = todos.filter((todo) => todo.completed === true);
  const doneCount = doneTodos.length;

  const { t, i18n } = useTranslation();

  const lngs = [
    { code: "PL"},
    { code: "EN"},
  ];

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
            setTodos2(newData);
    })
};

  useEffect(()=>{
    fetchPost();
  }, []);

  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert(t('validTodo'));
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className='bg'>
      {lngs.map((lng, i) => {
      const { code} = lng;
      return <button className='lang' onClick={() => handleTrans(code)}><span className={code}>{code}</span></button>;
    })}
      <div className='container'>
        <h3 className='heading'>{t('title')}</h3>
        <form onSubmit={createTodo} className='form'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='input'
            type='text'
            placeholder={t('addTodo')}
          />
          <button className='button'>
            <FaPlus size={25} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
      <div className='leftContainer'>
        <p>{t('tasksToDo')}:</p>
        <div className='todos'>{todos.length}</div>
        <p>{t('doneTasks')}:</p>
        <div className='todos doneTodos'>{doneCount}</div>
        </div>
        <div className='leftContainer'>
        {todos2.map((todo, index) => (
          <div>
          <p>{todos2[index].userName}:</p>
          <div className='todos doneTodosFriends'>{todos2[index].doneTodo}</div>
          </div>
          ))}
        </div>
    </div>
  );
}

export default App;
