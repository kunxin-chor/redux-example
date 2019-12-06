import React from 'react';
import { connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    myCustomers: state.customers
  }
}

function ConnectedApp(props) {
  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {props.m.map( c => <li>{c.first_name} {c.last_name}</li>)}
      </ul>
    </div>
  )
}

// this is JavaScript black magic
const App = connect(mapStateToProps)(ConnectedApp);

export default App;
