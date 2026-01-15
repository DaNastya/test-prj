import React, { useState } from 'react';

const KindergartenModal = ({ isOpen, onClose }) => {
  const [appNumber, setAppNumber] = useState('');
  const [childName, setChildName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  if (!isOpen) return null;

  const handleCheckQueue = () => {
    if (!appNumber && !childName) {
      alert('Пожалуйста, введите номер заявления или ФИО ребенка');
      return;
    }

    if (!birthDate) {
      alert('Пожалуйста, укажите дату рождения ребенка');
      return;
    }

    // В реальном приложении здесь был бы запрос к серверу для проверки очереди
    const queuePosition = Math.floor(Math.random() * 100) + 1;
    
    alert(`Статус проверки:\n\nНомер заявления: ${appNumber || 'не указан'}\nФИО ребенка: ${childName || 'не указано'}\nДата рождения: ${birthDate}\n\nТекущая позиция в очереди: ${queuePosition}\n\nРекомендуем проверять статус очереди регулярно.`);
    
    // Сброс формы
    setAppNumber('');
    setChildName('');
    setBirthDate('');
    onClose();
  };

  const handleCancel = () => {
    setAppNumber('');
    setChildName('');
    setBirthDate('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Проверка очереди в детский сад</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Введите номер заявления для проверки очереди:</p>
          <input 
            type="text" 
            value={appNumber}
            onChange={(e) => setAppNumber(e.target.value)}
            placeholder="Номер заявления"
          />
          <p>Или введите ФИО ребенка:</p>
          <input 
            type="text" 
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Фамилия Имя Отчество"
          />
          <p>Дата рождения ребенка:</p>
          <input 
            type="date" 
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Отмена
          </button>
          <button className="btn" onClick={handleCheckQueue}>
            Проверить очередь
          </button>
        </div>
      </div>
    </div>
  );
};

export default KindergartenModal;