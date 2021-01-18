import React, {useState, useEffect} from 'react';
// import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
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

  const options = [
    { value: "appsupport", label: "App Support" },
    { value: "myaccount", label: "My Account" },
    { value: "customerSupport", label: "Customer Support" },
    { value: "billing", label: "Billing" },
    { value: "hithere", label: "Just Saying Hi!" }
  ];
const Contact = () => {
    const { register, handleSubmit, reset, errors, setValue } = useForm({ defaultValues });
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [values, setReactSelect] = useState({
        selectedOption: []
      });
    
      const handleMultiChange = selectedOption => {
        setValue("reactSelect", selectedOption);
        setReactSelect({ selectedOption });
      };
    
      useEffect(() => {
        register({ name: "reactSelect" });
        
      }, []);

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
        <Select classname="reactSelect" name="filters" placeholder="Subject" ref={register({ required: true })}
        /* <option value="App Support">App Support</option>
        <option value=" My Account"> My Account</option>
        <option value=" Customer Support & Billing"> Customer Support & Billing</option>
        <option value=" Just Saying Hi!"> Just Saying Hi!</option> */
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti
        />

        {/* </select> */}
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
      <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
            <input
              placeholder="Subscribe to Newsletter"
              type="checkbox"
              name="Subscribe to Newsletter"
              id="customCheck1"
              ref={register}
            />
            {/* <label htmlFor="customCheck1"> Subscribe to Newsletter</label> */}
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

// this is just a comment 