import React from "react"
import "../App.css"
import { useForm } from "react-hook-form"

const Sample2 = () => {
  const { register, handleSubmit, errors } = useForm()
  console.log(errors)
  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25vw",
            }}
          >
            <input
              ref={register({
                required: "First Name is required",
                minLength: {
                  value: 8,
                  message: "First Name should be minimum 8 char long",
                },
                maxLength: {
                  value: 12,
                  message: "First Name should be maximum 12 char long",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters are allowed",
                },
              })}
              name='firstName'
              type='text'
              placeholder='First Name'
            />
            <p>{errors.firstName && errors.firstName?.message}</p>
            <input
              ref={register({
                required: "Last Name is required",
                minLength: {
                  value: 8,
                  message: "Last Name should be minimum 8 char long",
                },
                maxLength: {
                  value: 12,
                  message: "Last Name should be maximum 12 char long",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters are allowed",
                },
              })}
              name='lastName'
              type='text'
              placeholder='Last Name'
            />
            <p>{errors.lastName && errors.lastName?.message}</p>
            <input
              ref={register({
                required: "Email is required for formal Communication",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
              name='email'
              type='email'
              placeholder='Email'
            />
            <p>{errors.email && errors.email?.message}</p>
            <input
              ref={register({
                required: "Phone Number is required",
                minLength: {
                  value: 10,
                  message: "It should be of 10 digits",
                },
                maxLength: {
                  value: 10,
                  message: "It should be of 10 digits",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter Number only",
                },
              })}
              name='number'
              type='number'
              placeholder='Phone'
            />
            <p>{errors.number && errors.number?.message}</p>
            <input
              ref={register({
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Please provide strong password",
                },
              })}
              name='password'
              type='password'
              placeholder='Password'
            />
            <p>{errors.password && errors.password?.message}</p>
            <select
              ref={register({
                required: "Country is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please select Country",
                },
              })}
              name='country'
            >
              <option type='radio' value='...'>
                Select Country ....
              </option>
              <option type='radio' value='India'>
                India
              </option>
              <option type='radio' value='Pakistan'>
                Pakistan
              </option>
              <option type='radio' value='USA'>
                USA
              </option>
              <option type='radio' value='Dubai'>
                Dubai
              </option>
            </select>
            <p>{errors.country && errors.country?.message}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <h3>Gender: </h3>
              <div>
                <label htmlFor='Male'>
                  <input
                    name='gender'
                    ref={register}
                    type='checkbox'
                    id='Male'
                    value={"Male"}
                  />{" "}
                  Male
                </label>
                <label htmlFor='Female'>
                  <input
                    name='gender'
                    ref={register}
                    type='checkbox'
                    id='Female'
                    value={"Female"}
                  />{" "}
                  Female
                </label>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sample2

// Here is the example of registering element using register props and using handleSubmit for getting the data
// Errors object provided by useForm is used for handling error and showing them
