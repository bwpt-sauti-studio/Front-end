import React from 'react';
// import React from "react";
import { useForm } from "react-hook-form";
import './Contact.css';

const defaultValues = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Message: "",
    Checkbox: false,
    // switch: false,
    // RadioGroup: ""
  };

const Contact = () => {
    const { register, handleSubmit, reset, errors } = useForm({ defaultValues });
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Get In Touch</h1>
        <div className="form-group">
        <input type="text" placeholder="First name" name="Firstname" ref={register({required: true, maxLength: 80})} />
        {errors.Firstname && <p>This field is required</p>}
        </div>

        <div className="form-group">
        <input type="text" placeholder="Last name" name="Lastname" ref={register({required: true, maxLength: 100})} />
        </div>
        
        <div className="form-group">
        <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        {errors.Email && <p>This field is required</p>}
        </div>

        <div className="form-group">
        <select name="Subject" ref={register({ required: true })}>
        <option value="App Support">App Support</option>
        <option value=" My Account"> My Account</option>
        <option value=" Customer Support & Billing"> Customer Support & Billing</option>
        <option value=" Just Saying Hi!"> Just Saying Hi!</option>
        </select>
        {errors.Subject && <p>This field is required</p>}
        </div>

        <br/>

        <div className="form-group">
        <textarea placeholder="Message" name="Message" rows="9" ref={register({required: true, min: 8})} />
        {errors.Message && <p>This field is required</p>}
        </div>

        <br/>

      {/* <input name="Subscriber" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Subscriber" type="radio" value="No" ref={register({ required: true })}/> */}

      <div className="form-group">
            <input
              type="checkbox"
              placeholder="Subscribe to Newsletter"
              name="Subscribe to Newsletter"
              id="customCheck1"
              ref={register}
            />
            <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
          </div>

          <button
          type="button"
          onClick={() => {
            reset(defaultValues);
          }}
        >
          Reset Form
        </button>

        <div className="form-group">
            <input type="submit" />
            </div>

      {/* <button type="submit">Send Message</button> */}
    </form>
    </div>
  );
};

export default Contact