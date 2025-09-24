import { Link } from '../components/Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/202880721?v=4' alt='Photo of Ray-Phamton' />
        <p>hi!, My name is Raymon Reyes and i am creating a clone of React Router </p>
      </div>
      <Link to='/'>Go to Home</Link>
    </>
  )
}
