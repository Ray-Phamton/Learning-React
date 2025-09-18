import './Footer.css'
export function Footer ({ filters }) {
  return (
    <footer className='footer'>
      <h4> Active filters:</h4>
      {
            JSON.stringify(filters, null, 2)
        }
      {/*
      <h4>React test -
        <span>@Ray-Phamton</span>
      </h4>
      <h5>Shooping Cart with useContext & useReducer</h5>

      */}
    </footer>
  )
}
