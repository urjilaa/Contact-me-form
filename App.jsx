import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function MyForm() {
  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Data saving on console
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="header">
      <h1 className="header">Contact Me</h1>
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <p className="error">Name is required</p>}

        {/* EMail */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p className="error">Email is required</p>}

        {/* Message */}
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="email"
          {...register("message", { required: true })}
          placeholder="Message"
        />
        {errors.message && <p className="error">Message is required</p>}

        {/* Save button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
