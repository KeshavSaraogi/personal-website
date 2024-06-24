import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs
      .send(
        'service_acp64sr',
        'template_48euqmp',
        formData,
        v6eqwQvZjHdU-apNR
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message Sent!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
        <input type="submit" value="Send" className={styles.submit} />
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
