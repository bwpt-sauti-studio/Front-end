import React, { Component } from 'react';
// import React from "react";
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Get In Touch</h1>
        <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
        {errors.Firstname && <p>This field is required</p>}
        <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
        <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        {errors.Email && <p>This field is required</p>}
        <select name="Subject" ref={register({ required: true })}>
        <option value="App Support">App Support</option>
        <option value=" My Account"> My Account</option>
        <option value=" Customer Support & Billing"> Customer Support & Billing</option>
        <option value=" Just Saying Hi!"> Just Saying Hi!</option>
        </select>
        {errors.Subject && <p>This field is required</p>}
        <textarea name="Message" ref={register({required: true, min: 8})} />
        {errors.Message && <p>This field is required</p>}

      <input name="Subscriber" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Subscriber" type="radio" value="No" ref={register({ required: true })}/>

      
      <input type="submit" />

      {/* <button type="submit">Send Message</button> */}
    </form>
    </div>
  );
};

export default Contact