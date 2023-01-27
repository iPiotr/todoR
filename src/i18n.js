import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* Initializing the i18n library. */
i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false,
    },
    // language resources
    resources: {
      EN: {
        translation: {
        title: 'To-do list',
        validTodo: 'Please enter a valid todo',
        addTodo: 'Add to-do',
        tasksToDo: 'Tasks',
        doneTasks: 'Completed tasks'
        }
    },
      PL: {
        translation: {
            title: 'Lista zadań',
            validTodo: 'Wprowadź poprawny tekst zadania',
            addTodo: 'Dodaj zadanie',
            tasksToDo: 'Zadania',
            doneTasks: 'Wykonane zadania'
        }
      },
    }
  });

export default i18n;