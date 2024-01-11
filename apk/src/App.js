import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <div className='navBar'>
        <h1>FiszkoStrona</h1>
      </div>

      <div className='Fiszki'>
        <Fiszki/>
      </div>
    </div>
  );
}

function Fiszki(){
  const Fiszka = [
    { id: 1, question: 'Pytanie1', answer: 'Odpowiedz1' },
    { id: 2, question: 'Pytanie2', answer: 'Odpowiedz2' },
    { id: 3, question: 'Pytanie3', answer: 'Odpowiedz3' },
    { id: 4, question: 'Pytanie4', answer: 'Odpowiedz4' },
    { id: 5, question: 'Pytanie5', answer: 'Odpowiedz5' },
    { id: 6, question: 'Pytanie6', answer: 'Odpowiedz6' },
    { id: 7, question: 'Pytanie7', answer: 'Odpowiedz7' },
    { id: 8, question: 'Pytanie8', answer: 'Odpowiedz8' },
  ];

  const [akFiszka, setFiszka] = useState(Fiszka);

  const handleClick = (index) => {
    setFiszka((prevFiszka) => {
      const newFiszka = prevFiszka.map((card) => ({ ...card, isFlipped: false }));

      newFiszka[index].isFlipped = !prevFiszka[index].isFlipped; //Obrócenie fiszki

      return newFiszka;
    });
  };

  return(
    <div className='FiszkiCon'>
      <div className="flashcard-container">
          {akFiszka.map((card, index) => (
            <div
              key={card.id}
              className={`flashcard ${card.isFlipped ? 'flipped' : ''}`}
              onClick={() => handleClick(index)}
            >

              <div className="front">{card.question}</div>
              <div className="back">{card.answer}</div>

            </div>
          ))}
      </div>
    </div>
  );

}

export default App;
