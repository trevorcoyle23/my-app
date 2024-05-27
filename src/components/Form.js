import "./FormStyles.css";

import emailjs from 'emailjs-com';

import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ezi63oe', 'template_iqk466n', e.target, 'zq0oMdDBVENDrHQ0j')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again later.');
            });
        e.target.reset();
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" name="message" value={formData.message} onChange={handleChange} required />
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
