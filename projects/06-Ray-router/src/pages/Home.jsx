import { Link } from '../components/Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>This is a example page for create a React Router </p>
      <Link to='/about'>Go to About</Link>
    </>
  )
}
