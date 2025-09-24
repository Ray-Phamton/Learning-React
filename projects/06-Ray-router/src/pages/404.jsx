import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <h1>Oops.. this is not ok</h1>
      <img src='https://i.pinimg.com/736x/56/73/5d/56735d62ad380fb7fb98115df2ffe55b.jpg' alt='image of baby calcining' />
      <p>
        your route not exist,
        <Link to='/'> click here </Link>
        to go to the home
      </p>
    </>

  )
}
