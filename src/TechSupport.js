import React, { useState } from 'react';

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
            <i className="fas fa-phone"></i>
          </div>
          <div>
            <strong>Телефон:</strong> 8 (800) 123-45-67 (бесплатно по РФ)
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <strong>Электронная почта:</strong> support@cityservices.ru
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <strong>Время работы:</strong> Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-comments"></i>
          </div>
          <div>
            <strong>Онлайн-чат:</strong> Доступен в рабочее время в правом нижнем углу сайта
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .tech-support-page {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .back-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          margin-bottom: 20px;
        }
        
        .back-btn:hover {
          background-color: #2980b9;
        }
        
        .form-container {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          padding: 40px;
          margin-bottom: 40px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #2c3e50;
          font-weight: 600;
        }
        
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #3498db;
          outline: none;
        }
        
        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }
        
        .submit-btn {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
        }
        
        .submit-btn:hover {
          background-color: #2980b9;
        }
        
        .contact-info {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          padding: 30px;
          margin-bottom: 40px;
        }
        
        .contact-info h3 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #3498db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-right: 15px;
        }
        
        @media (max-width: 768px) {
          .form-container, .contact-info {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TechSupport;