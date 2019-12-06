import React from 'react';
import { connect} from 'react-redux'
import { addCustomer} from './actions/index'

const mapStateToProps = (state) => {
  return {
    myCustomers: state.customers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCustomer: (customer) => {
      dispatch(addCustomer(customer))
    }
  }
}

class ConnectedApp extends React.Component {

  state = {
    first_name : '',
    last_name: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  add = () => {
    // this is the action addCustomer copied to the props
    // due to mapDispatchToProps 
    this.props.addCustomer({
      first_name : this.state.first_name,
      last_name: this.state.last_name
    })

    this.setState({
      first_name:'',
      last_name:''
    })
  }

  render() {
    return (
      <div>
        <h1>Customers</h1>
        <div>
          <input type='text' name='first_name' placeholder='First Name' onChange={this.handleChange} value={this.state.first_name}/>
          <input type='text' name='last_name' placeholder='Last Name' onChange={this.handleChange} value={this.state.last_name}/>
          <button onClick={this.add}>Add Customer</button>
        </div>
        <ul>
          {this.props.myCustomers.map( c => <li>{c.first_name} {c.last_name}</li>)}
        </ul>

      </div>
    )
  }
  
}

// this is JavaScript black magic
const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

// SIDENOTE: If we only have mapDispatchToProps but no mapStateToProps,we have
// to set the first argument null:
// const App = connect(null, mapDispatchToProps)(ConnectedApp);


export default App;
