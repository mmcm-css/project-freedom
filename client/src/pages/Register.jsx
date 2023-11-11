import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    axios
      .post("http://localhost:3000/mapuan/register", {
        username: username,
        email: email,
        password: password,
        isAdmin: false,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-14">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-xs gap-2">
            <h1 className="text-2xl font-bold text-center p-3">Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="-m-2">
                <label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <br />
              <div className="-m-2">
                <label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <br />
              <div className="-m-2">
                <label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <br />
              <div className="-m-2">
                <label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              </div>
              <br />
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </form>
            <p className="text-center">
              Already a member?{" "}
              <a href="/login" className="font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
