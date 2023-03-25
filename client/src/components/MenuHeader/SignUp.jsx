import React from "react";
import { useForm } from "react-hook-form";

const SignUp = ({ setRegister }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <p
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "var(--primary2)",
        }}
      >
        SignUp
      </p>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="d-flex flex-column w-100"
        style={{
          gap: 20,
        }}
      >
        <label>
          Email:
          <input
            className="w-100"
            type="email"
            placeholder="Enter your email"
            style={{
              outline: "none",
              border: "none",
              padding: 10,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
            {...register("email", { required: true })}
          />
        </label>
        <label>
          Password:
          <input
            style={{
              outline: "none",
              border: "none",
              padding: 10,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
            placeholder="Enter your password"
            className="w-100"
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        <label>
          Confirm password:
          <input
            style={{
              outline: "none",
              border: "none",
              padding: 10,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
            placeholder="Enter your password"
            className="w-100"
            type="password"
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <p
        style={{
          fontSize: 14,
        }}
      >
        Don't have an account yet?{" "}
        <span
          style={{
            color: "var(--primary2)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Sign Up
        </span>
      </p>
    </>
  );
};

export default SignUp;
