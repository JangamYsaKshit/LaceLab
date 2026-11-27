
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication will be added later.
  };

  const handleGoogleLogin = () => {
    // Firebase Google authentication will be added later.
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Logo */}
        <Link to="/" className="login-logo">
          LaceLab<span>.</span>
        </Link>

        {/* Heading */}
        <div className="login-heading">
          <h1>Welcome back</h1>
          <p>Sign in to your account to continue.</p>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="google-login"
          onClick={handleGoogleLogin}
        >
          <svg
            className="google-icon"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.72 7.18l7.64 5.92c4.46-4.12 7.12-10.18 7.12-17.57z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.91-5.88l-7.64-5.92c-2.13 1.43-4.89 2.28-8.27 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="login-divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        {/* Email Login */}
        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <div className="input-wrapper">
              <Mail size={19} />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <div className="input-wrapper">
              <Lock size={19} />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-submit">
            Sign In
          </button>

        </form>

        {/* Register */}
        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Create an account</Link>
        </p>

        {/* Footer */}
        <div className="login-footer">
          <Link to="/help">Help</Link>
          <span>·</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms">Terms of Service</Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
