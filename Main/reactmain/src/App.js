import React, { Component } from 'react';
import User from './components/User';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      user: '',
      loading: false
    }

  }
  getUser = () => {
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;

    setTimeout( () => {
      fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {

        this.setState({
          user: data,
          loading: false
        });
      })
    },1000)
  }
  render() {   

    const name = this.state.user.name ;
    let userProfile;

    if( this.state.loading === true)  
    {
       userProfile = <div className='loading-user-card'><Loading /></div>
    }else if (name ) {
      userProfile = <User user={this.state.user} />
    }

    return (
     
      <div className="App">
        <Header />
        <div className="wrapper">
          <div id='search-bar' class="form-inline rounded mx-auto d-block">
            <input type="text" class="form-control mr-sm-2" placeholder='Enter UserName' ref="name" />
            <button className='searchButton'class="btn btn-outline-secondary" onClick={this.getUser}> check it out
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {userProfile}
      </div>
    );
  }
}

export default App;




