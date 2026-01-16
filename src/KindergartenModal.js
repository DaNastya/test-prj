import React, { useState } from 'react';

const KindergartenModal = ({ isOpen, onClose }) => {
  const [appNumber, setAppNumber] = useState('');


  if (!isOpen) return null;

  const handleCheckQueue = () => {
    if (!appNumber) {
      alert('Пожалуйста, введите номер заявления');
      return;
    }

    // В реальном приложении здесь был бы запрос к серверу для проверки очереди
    const queuePosition = Math.floor(Math.random() * 100) + 1;
    
    alert(`Статус проверки:\n\nНомер заявления: ${appNumber || 'не указан'}\n\nТекущая позиция в очереди: ${queuePosition}\n`);
    
    // Сброс формы
    setAppNumber('');
    onClose();
  };

  const handleCancel = () => {
    setAppNumber('');

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