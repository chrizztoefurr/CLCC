import React from 'react';

function Contact() {

  const [ formData, setFormData ] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} required />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={handleInputChange} required />
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input type='text' name='phoneNumber' id='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} />
        <lable htmlFor='eventDetails'>Event details</lable>
        <textarea name='message' id='eventDetails' value={formData.message} onChange={handleInputChange} />
        <button className='form-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
};

export default Contact;