import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}
function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This is a example page for create a React Router </p>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </>
  )
}
function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/202880721?v=4' alt='Photo of Ray-Phamton' />
        <p>hello!, i am Raymon Reyes and i am create a clone of React Router </p>
      </div>
      <button onClick={() => navigate('/')}>Go to home</button>
    </>
  )
}

export function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
