import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";

import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login form is ready for backend integration.");
  };

  return (
    <main className="login-container">
      <section className="login-panel" aria-labelledby="login-heading">
        <Link to="/" className="login-back">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>Back to LaceLab</span>
        </Link>

        <Link to="/" className="login-brand" aria-label="LaceLab home">
          LaceLab.
        </Link>

        <div className="login-content">
          <span className="login-label">WELCOME BACK</span>

          <h1 id="login-heading">Sign in to your account</h1>

          <p className="login-description">
            Welcome back. Enter your details to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="email">Email address</label>

              <div className="login-input">
                <Mail size={18} aria-hidden="true" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="login-form-group">
              <label htmlFor="password">Password</label>

              <div className="login-input">
                <LockKeyhole size={18} aria-hidden="true" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  {showPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <button className="signin-button" type="submit">
              Sign In
            </button>
          </form>

          <p className="login-signup">
            New to LaceLab? <Link to="/">Explore our store</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;