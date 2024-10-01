import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pratices = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, seTtitle] = useState("");
  const [body, seTbody] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      body: body,
    };
    const headers: any = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        "http://localhost:5000/content",

        data,
        headers
      )
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem("userId", response.data._id);
        localStorage.setItem("firstName", response.data.firstName);
        navigate("/dashboard");
        setLoading(false);
        if (response.data) {
          setSuccessMessage("Signup successful");
        } else {
        }
      })
      .catch((error: any) => {
        setLoading(false);
        setErrorMsg("Invalid user crendentials, failed to create user");
      });
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            make a POST
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                title
              </label>
              <div className="mt-2">
                <input
                  value={title}
                  onChange={(e) => seTtitle(e.target.value)}
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                body
              </label>
              <div className="mt-2">
                <input
                  value={body}
                  onChange={(e) => seTbody(e.target.value)}
                  id="email"
                  name="email"
                  type="text"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {loading ? (
              <div>Loading....</div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            )}
            {errorMsg && (
              <div style={{ color: "white", backgroundColor: "red" }}>
                {errorMsg}{" "}
              </div>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pratices;
