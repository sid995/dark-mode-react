import React, { useEffect } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    const userPreferredDark = getPrefColorScheme()
    // if mode was saved -> dark/light
    if (isReturningUser) {
      return savedMode
      // if preferred color scheme was dark -> dark
    } else if (userPreferredDark) {
      return true
      // else -> light
    } else {
      return false
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className="toggle-container">
          <span className="toggle'">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <h2>Toggle the switch to see some magic happen!</h2>
      </main>
    </div>
  )
}

export default App
