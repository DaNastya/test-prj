import React, { useState } from 'react';
import './App.css';
import TechSupport from './TechSupport';
import RateBotModal from './RateBotModal';
import KindergartenModal from './KindergartenModal';

function App() {
  const [showRateModal, setShowRateModal] = useState(false);
  const [showKindergartenModal, setShowKindergartenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleComplaintClick = () => {
    alert('Для подачи жалобы на расчистку территории, пожалуйста, перейдите на портал городских услуг или позвоните по телефону 8 (800) 123-45-67.');
  };

  if (currentPage === 'tech-support') {
    return <TechSupport onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Городские сервисы</h1>
        <p>Выберите нужный сервис из списка ниже</p>
      </div>
      
      <div className="container">
        {/* Кнопка 1: Техническая поддержка */}
        <div className="card">
          <div className="icon" style={{background: 'linear-gradient(135deg, #3498db, #2c3e50)'}}>
            <i className="fas fa-headset"></i>
          </div>
          <h3>Техническая поддержка</h3>
          <p>Получите помощь по техническим вопросам, заполнив форму обратной связи</p>
          <button className="btn" onClick={() => setCurrentPage('tech-support')}>
            Перейти
          </button>
        </div>
        
        {/* Кнопка 2: Оценить работу бота */}
        <div className="card">
          <div className="icon" style={{background: 'linear-gradient(135deg, #2ecc71, #27ae60)'}}>
            <i className="fas fa-robot"></i>
          </div>
          <h3>Оценить работу бота</h3>
          <p>Оставьте отзыв о работе нашего чат-бота, чтобы помочь нам стать лучше</p>
          <button className="btn" onClick={() => setShowRateModal(true)}>
            Оценить
          </button>
        </div>
        
        {/* Кнопка 3: Оставить жалобу на расчистку территории */}
        <div className="card">
          <div className="icon" style={{background: 'linear-gradient(135deg, #e74c3c, #c0392b)'}}>
            <i className="fas fa-snowplow"></i>
          </div>
          <h3>Жалоба на расчистку территории</h3>
          <p>Сообщите о проблемах с уборкой снега или расчисткой территории в вашем районе</p>
          <button className="btn" onClick={handleComplaintClick}>
            Оставить жалобу
          </button>
        </div>
        
        {/* Кнопка 4: Проверка очереди в детский сад */}
        <div className="card">
          <div className="icon" style={{background: 'linear-gradient(135deg, #9b59b6, #8e44ad)'}}>
            <i className="fas fa-child"></i>
          </div>
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
      
      <div className="footer">
        <p>© 2023 Городские сервисы. Все права защищены.</p>
        <p>Телефон для справок: 8 (800) 123-45-67</p>
      </div>
    </div>
  );
}

export default App;
