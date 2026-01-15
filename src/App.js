import { useState } from 'react';
import './App.css';
import TechSupport from './TechSupport';
import Complaint from './Complaint';
import RateBotModal from './RateBotModal';
import KindergartenModal from './KindergartenModal';

function App() {
  const [showRateModal, setShowRateModal] = useState(false);
  const [showKindergartenModal, setShowKindergartenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');


  if (currentPage === 'tech-support') {
    return <TechSupport onBack={() => setCurrentPage('home')} />;
  }
    if (currentPage === 'complaint') {
    return <Complaint onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="App">

      <div className="container">
        {/* Кнопка 1: Техническая поддержка */}
        <div className="card">

          <h3>Техническая поддержка</h3>
          <p>Получите помощь по техническим вопросам, заполнив форму обратной связи</p>
          <button className="btn" onClick={() => setCurrentPage('tech-support')}>
            Перейти
          </button>
        </div>
        
        {/* Кнопка 2: Оценить работу бота */}
        <div className="card">

          <h3>Оценить работу бота</h3>
          <p>Оставьте отзыв о работе нашего чат-бота, чтобы помочь нам стать лучше</p>
          <button className="btn" onClick={() => setShowRateModal(true)}>
            Оценить
          </button>
        </div>
        
        {/* Кнопка 3: Оставить жалобу на расчистку территории */}
        <div className="card">

          <h3>Жалоба на расчистку территории</h3>
          <p>Сообщите о проблемах с уборкой снега или расчисткой территории в вашем районе</p>
          <button className="btn" onClick={() => setCurrentPage('complaint')}>
            Перейти
          </button>
        </div>
        
        {/* Кнопка 4: Проверка очереди в детский сад */}
        <div className="card">

          <h3>Проверка очереди в детский сад</h3>
          <p>Проверьте статус очереди в детский сад для вашего ребенка по номеру заявления</p>
          <button className="btn" onClick={() => setShowKindergartenModal(true)}>
            Проверить очередь
          </button>
        </div>
      </div>
      
      {/* Модальное окно для оценки работы бота */}
      <RateBotModal 
        isOpen={showRateModal}
        onClose={() => setShowRateModal(false)}
      />
      
      {/* Модальное окно для проверки очереди в детский сад */}
      <KindergartenModal 
        isOpen={showKindergartenModal}
        onClose={() => setShowKindergartenModal(false)}
      />
      
    </div>
  );
}

export default App;
