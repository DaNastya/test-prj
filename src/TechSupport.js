import { useState } from 'react';
import './style.css';

const TechSupport = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueType: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Спасибо за ваше обращение, ${formData.name}!\n\nВаш запрос отправлен в техническую поддержку. Мы ответим вам на адрес ${formData.email} в течение 24 часов.`);
    
    // Очистка формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      issueType: '',
      description: ''
    });
  };

  return (
    <div className="tech-support-page">
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Назад к сервисам
      </button>
      
      <div className="header">
        <h1>Техническая поддержка</h1>
        <p>Заполните форму, чтобы получить помощь по техническим вопросам</p>
      </div>
      
      <div className="form-container">
        <form id="supportForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input 
              type="text" 
              id="name" 
              required 
              placeholder="Иванов Иван Иванович"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Электронная почта *</label>
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="+7 (900) 123-45-67"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="issueType">Тип проблемы *</label>
            <select 
              id="issueType" 
              required
              value={formData.issueType}
              onChange={handleChange}
            >
              <option value="">Выберите тип проблемы</option>
              <option value="website">Проблема с сайтом</option>
              <option value="bot">Проблема с работой бота</option>
              <option value="account">Проблема с учетной записью</option>
              <option value="payment">Проблема с оплатой</option>
              <option value="other">Другая проблема</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Описание проблемы *</label>
            <textarea 
              id="description" 
              required 
              placeholder="Подробно опишите проблему, с которой вы столкнулись..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="files">Прикрепить файлы (скриншоты, документы)</label>
            <input type="file" id="files" multiple />
          </div>
          
          <button type="submit" className="submit-btn">
            Отправить запрос в поддержку
          </button>
        </form>
      </div>
      
      <div className="contact-info">
        <h3>Контакты технической поддержки</h3>
 
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <strong>Электронная почта:</strong> gosuslugi41@kamgov.ru
          </div>
        </div>

      </div>

    </div>
  );
};

export default TechSupport;