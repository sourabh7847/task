import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const state = useSelector(s => s);

  const saveContactUsFeedback = async (dataToSend) => {
    try {
        var config = {
            method: 'get',
            url: '/sql/contactUs',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(dataToSend)
        };
        await axios(config);  
    }
    catch(err) {
        console.log(err);
        alert("There was some error while saving your response");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
      username: state.user.user
    }
    await saveContactUsFeedback(conFom);
    setFormStatus('FeedBack Submitted Successfully!')
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactUs
