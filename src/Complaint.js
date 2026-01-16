import { useState } from 'react';
import './style.css';

const Complaint = ({ onBack }) => {
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
      
    <div class="header">
        <h1>Жалоба на расчистку территории</h1>
        <p>Заполните форму, чтобы отправить жалобу</p>
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

          <div class="form-group">
                <label for="addres">Укажите адрес*</label>
                <input 
                  type="text"
                  id="addres"
                  required
                  placeholder="г.Петропавловск-Камчатский ул.Ленинская д.14"/>
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
            <label htmlFor="files">Прикрепить фото</label>
            <input type="file" id="files" multiple />
          </div>
          
          <button type="submit" className="submit-btn">
            Отправить жалобу
          </button>
        </form>
      </div>
    

    </div>
  );
};

export default Complaint;