import React, { useState } from 'react';

const RateBotModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Пожалуйста, выберите оценку перед отправкой.');
      return;
    }

    alert(`Спасибо за вашу оценку: ${rating} звезд! Ваш отзыв: "${comment}". Мы учтем ваше мнение для улучшения работы бота.`);
    
    // Сброс формы
    setRating(0);
    setComment('');
    setHoverRating(0);
    onClose();
  };

  const handleCancel = () => {
    setRating(0);
    setComment('');
    setHoverRating(0);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Оценить работу бота</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Пожалуйста, оцените работу нашего чат-бота по шкале от 1 до 5:</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map(star => (
              <i 
                key={star}
                className={`fas fa-star star ${(hoverRating || rating) >= star ? 'active' : ''}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          <p>Оставьте комментарий (необязательно):</p>
          <textarea 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ваш комментарий..."
          />
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Отмена
          </button>
          <button className="btn" onClick={handleSubmit}>
            Отправить оценку
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateBotModal;