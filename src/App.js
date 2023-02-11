import {useState} from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['Библиотека', 'Фреймворк', 'Приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['Приложение', 'Часть приложения или страницы', 'Я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое useState?',
    variants: [
      'Это функция для хранения данных компонента',
      'Это глобальный стейт',
      'Это не хук',
    ],
    correct: 0,
  },
  {
    title: 'JavaScript это...',
    variants: [
      'Язык программирования',
      'Это функция',
      'Язык разметки',
    ],
    correct: 0,
  },
  {
    title: 'Зачем нужен LocalStorage?',
    variants: [
      'Для хранения данных в массиве',
      'Для хранения данных локально в браузере',
      'Это функция для сохранения данных',
    ],
    correct: 1,
  },
  {
    title: 'Можно ли писать не используя Babel?',
    variants: [
      'Да',
      'Нет',
      'Можно,если нет интернета',
    ],
    correct: 0,
  },
  {
    title: 'Чем свойства отличаются от состояний?',
    variants: [
      'Свойства можно изменять, состояния нельзя',
      'Состояния можно изменять, свойства нельзя',
      'Свойства для работы со значениями, состояния для работы с функциями',
    ],
    correct: 1,
  },
  {
    title: 'Какая компания разработала React JS?',
    variants: [
      'META',
      'Google',
      'Facebook',
    ],
    correct: 0,
  },
  {
    title: 'Как много компонентов может быть на сайте?',
    variants: [
      'Не более 300',
      'Не более 10',
      'Неограниченное количество',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы назвали верных {correct} из {questions.length}</h2>
      <a href='/'>
         <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({question,onClickVariant,step}) {

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((item,index )=> 
            <li onClick={()=> onClickVariant(index)} key={item}>{item}</li>
          )
        }
      </ul>
    </>
  );
}

function App() {

  const [step,setStep] = useState(0);
  const [correct,setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (num) => {
    setStep(step + 1);

    if(num === question.correct){
      setCorrect(correct + 1);
    }
  }


  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> :  <Result correct={correct} />
      }
      
    </div>
  );
}

export default App;
