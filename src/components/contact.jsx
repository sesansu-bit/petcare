"use client";
import styles from "./contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema with Yup
const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .max(500, "Message is too long")
    .required("Message is required"),
});

export default function Contact() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitted:", values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div
            className={`${styles["contact-box"]} flex flex-col w-screen  h-[54vh]`}
          >
            <div className={`${styles["contact-title"]} w-full h-[80px]`}>
              Book Your Appointment
              <p>Let us know about your concern !</p>
            </div>

            <div
              className={`${styles["form-box"]} flex items-center  justify-around  flex-col w-full  h-[80%]`}
            >
              {/* First & Last Name */}
              <div
                className={`${styles["name-box"]} flex  w-full justify-evenly rounded-[10px] h-[50px]`}
              >
                <div
                  className={`${styles["inputdiv"]} flex flex-col w-[46%] rounded-[10px] h-[50px]`}
                >
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={`${styles["real"]} text-white w-full h-full rounded-[10px]`}
                    suppressHydrationWarning
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                  className={`${styles["error"]} text-white text-sm`}
                                      suppressHydrationWarning

                  />
                </div>

                <div
                  className={`${styles["inputdiv"]} flex flex-col w-[46%] rounded-[10px] h-[50px]`}
                >
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={`${styles["real"]} text-white w-full h-full rounded-[10px]`}
                    suppressHydrationWarning
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                  className={`${styles["error"]} text-white text-sm`}
                                      suppressHydrationWarning

                  />
                </div>
              </div>

              {/* Email */}
              <div
                className={`${styles["inputdiv"]} flex flex-col w-[95%] rounded-[10px] h-[50px]`}
              >
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  className={`${styles["real"]} text-white w-full h-full rounded-[10px]`}
                  suppressHydrationWarning
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={`${styles["error"]} text-white text-sm`}
                                    suppressHydrationWarning

                />
              </div>

              {/* Message */}
              <div
                className={`${styles["inputdiv"]} flex flex-col w-[95%] rounded-[10px] h-[130px]`}
              >
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Tell us about your concern"
                  className={`${styles["realtext"]} text-white w-full h-full rounded-[10px]`}
                  suppressHydrationWarning
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={`${styles["error"]} text-white text-sm`}
                                    suppressHydrationWarning

                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                                    suppressHydrationWarning

                className={`${styles["submitted"]} flex w-[100px] justify-evenly rounded-[10px] items-center text-white h-[50px]`}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
