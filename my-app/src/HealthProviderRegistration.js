import React from "react";
import ReactDOM from 'react-dom';
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import SelectUSState from 'react-select-us-states'
import * as Yup from "yup";


const HealthProviderRegistration = () => (

  <Formik
    initialValues={{ email: "", firstname: "", lastname: "", npinumber: "", address:"", city:"", zip:"", phone:"", state:""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Submitting", values);
        alert("Your form has been submitted");
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      firstname: Yup.string()
        .required("Required"),
      lastname: Yup.string()
        .required("Required"),
      npinumber: Yup.string()
        .required("Required"),
      address: Yup.string()
        .required("Required"),
      city: Yup.string()
        .required("Required"),
      zip: Yup.string()
        .required("Required"),
      phone: Yup.string()
        .required("Required"),
      state: Yup.string()
        .required("Required")
    })}
  >
    
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      
      return (
        <form onSubmit={handleSubmit}>
        <h1>HealthCare Provider Registration</h1>
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter Your First Name"
        value={values.firstname}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.firstname && touched.firstname && "error"}
      />
      {errors.firstname && touched.firstname && (
        <div className="input-feedback">{errors.firstname}</div>
      )}
      

      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        placeholder="Enter Your Last Name"
        value={values.lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.lastname && touched.lastname && "error"}
      />
      {errors.lastname && touched.lastname && (
        <div className="input-feedback">{errors.lastname}</div>
      )}

      <label htmlFor="npinumber">NPI Number</label>
      <input
        id="npinumber"
        name="npinumber"
        type="text"
        placeholder="Enter the NPI Number"
        value={values.npinumber}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.npinumber && touched.npinumber && "error"}
      />
      {errors.npinumber && touched.npinumber && (
        <div className="input-feedback">{errors.npinumber}</div>
      )}

      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        placeholder="Enter the Street Address"
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.address && touched.address && "error"}
      />
      {errors.address && touched.address && (
        <div className="input-feedback">{errors.address}</div>
      )}

      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        placeholder="Enter the City"
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.city && touched.city && "error"}
      />
      {errors.city && touched.city && (
        <div className="input-feedback">{errors.city}</div>
      )}

      {/* <label htmlFor="state">State</label>
      <SelectUSState 
        class="formClass"
        style="margin-bottom: 20px;"
        id="state"
        name="state"
        type="text"
        placeholder="Enter State"
        value={values.state}
      /> */}

      <label htmlFor="state">State</label>
      <input
        id="state"
        name="state"
        type="text"
        placeholder="Enter the State"
        value={values.state}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.state && touched.state && "error"}
      />
      {errors.state && touched.state && (
        <div className="input-feedback">{errors.state}</div>
      )}

      <label htmlFor="zip">Zip Code</label>
      <input
        id="zip"
        name="zip"
        type="text"
        placeholder="Enter the Zip Code"
        value={values.zip}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.zip && touched.zip && "error"}
      />
      {errors.zip && touched.zip && (
        <div className="input-feedback">{errors.zip}</div>
      )}

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="text"
        placeholder="Enter the Phone Number"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.phone && touched.phone && "error"}
      />
      {errors.phone && touched.phone && (
        <div className="input-feedback">{errors.phone}</div>
      )} 
            

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email && "error"}
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}


<button type="submit" disabled={isSubmitting}>
  Submit
</button>

    </form>
      );
    }}
  </Formik>
);

export default HealthProviderRegistration;