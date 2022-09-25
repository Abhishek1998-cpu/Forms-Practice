import React from "react"
import "../App.css"
import { useForm } from "react-hook-form"

const Sample1 = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
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
              ref={register}
              name='firstName'
              type='text'
              placeholder='First Name'
            />
            <input
              ref={register}
              name='lastName'
              type='text'
              placeholder='Last Name'
            />
            <input
              ref={register}
              name='email'
              type='email'
              placeholder='Email'
            />
            <input
              ref={register}
              name='number'
              type='number'
              placeholder='Phone'
            />
            <input
              ref={register}
              name='password'
              type='password'
              placeholder='Password'
            />
            <select ref={register} name='country'>
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
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p>Gender: </p>
              <div>
                <label htmlFor='Male'>
                  <input
                    name='Male'
                    ref={register}
                    type='checkbox'
                    value={"Male"}
                    id='Male'
                  />{" "}
                  Male
                </label>
                <label htmlFor='Female'>
                  <input
                    name='Female'
                    ref={register}
                    type='checkbox'
                    value={"Female"}
                    id='Female'
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

export default Sample1

// Here is the example of registering element using register props and using handleSubmit for getting the data
