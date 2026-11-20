
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Load saved language, or use English by default
  const [language, setLanguage] = useState(
    () => localStorage.getItem('lacelab-language') || 'en'
  )

  const [isFading, setIsFading] = useState(false)

  // Update browser language and save selection
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('lacelab-language', language)
  }, [language])

  // English and German translations
  const translations = {
    en: {
      welcome: 'Welcome Back',
      subtitle: 'Sign in to continue your journey with LaceLab.',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      show: 'Show',
      hide: 'Hide',
      remember: 'Remember me',
      forgot: 'Forgot password?',
      signIn: 'Sign In',
      or: 'OR',
      google: 'Continue with Google',
      noAccount: "Don't have an account?",
      createAccount: 'Create Account',
      heroTagline: 'STEP INTO YOUR STYLE.',
      loginAlert: 'LaceLab login form submitted!',
      googleAlert: 'Google login will be implemented later.'
    },

    de: {
      welcome: 'Willkommen zurück',
      subtitle: 'Melde dich an und setze deine Reise mit LaceLab fort.',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'E-Mail-Adresse eingeben',
      password: 'Passwort',
      passwordPlaceholder: 'Passwort eingeben',
      show: 'Anzeigen',
      hide: 'Verbergen',
      remember: 'Angemeldet bleiben',
      forgot: 'Passwort vergessen?',
      signIn: 'Anmelden',
      or: 'ODER',
      google: 'Weiter mit Google',
      noAccount: 'Noch kein Konto?',
      createAccount: 'Konto erstellen',
      heroTagline: 'FINDE DEINEN STYLE.',
      loginAlert: 'LaceLab-Anmeldung wurde gesendet!',
      googleAlert: 'Google-Anmeldung wird später implementiert.'
    }
  }

  const t = translations[language]

  // Change language with fade animation
  const changeLanguage = (newLanguage) => {
    if (newLanguage === language || isFading) return

    setIsFading(true)

    setTimeout(() => {
      setLanguage(newLanguage)
      setIsFading(false)
    }, 150)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t.loginAlert)
  }

  const handleGoogleLogin = () => {
    alert(t.googleAlert)
  }

  return (
    <main className="login-container">

      {/* Left Side - Sneaker Image */}
      <section className="login-hero">
        <img
          src="/lacelab-hero.png"
          alt="LaceLab premium sneaker"
          className="hero-image"
        />

        <div className="hero-overlay">
          <h1>LACELAB.</h1>
          <p>{t.heroTagline}</p>
        </div>
      </section>

      {/* Right Side - Login Panel */}
      <section className="login-panel">

        <div className={`login-content ${isFading ? 'fade-out' : ''}`}>

          <div className="brand-name">
            LACELAB.
          </div>

          <div className="welcome-text">
            <h2>{t.welcome}</h2>
            <p>{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                {t.email}
              </label>

              <input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                {t.password}
              </label>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? t.hide : t.show}
                </button>
              </div>
            </div>

            {/* Form Options */}
            <div className="form-options">

              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                {t.remember}
              </label>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                {t.forgot}
              </a>

            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="signin-button"
            >
              {t.signIn}
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>{t.or}</span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
          >
            {t.google}
          </button>

          {/* Create Account */}
          <p className="signup-text">
            {t.noAccount}

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              {t.createAccount}
            </a>
          </p>

        </div>

        {/* Footer */}
        <footer className="login-footer">
          © 2026 LaceLab. All rights reserved.
        </footer>

        {/* Language Switcher */}
        <div className="language-switcher" aria-label="Choose language">

          {/* English Flag */}
          <button
            type="button"
            className={`language-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            aria-label="Switch to English"
            aria-pressed={language === 'en'}
            title="English"
          >
            <img
              src="/flags/uk.png"
              alt="English"
            />
          </button>

          {/* German Flag */}
          <button
            type="button"
            className={`language-button ${language === 'de' ? 'active' : ''}`}
            onClick={() => changeLanguage('de')}
            aria-label="Zu Deutsch wechseln"
            aria-pressed={language === 'de'}
            title="Deutsch"
          >
            <img
              src="/flags/germany.png"
              alt="Deutsch"
            />
          </button>

        </div>

      </section>

    </main>
  )
}

export default App
