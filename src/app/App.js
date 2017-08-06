import React, { Component } from 'react';
import {connect} from 'react-redux'

//Pages
// import Header     from '../components/header'
 import ForoPage   from '../pages/post/'
// import AdminPage  from '../pages/admin/'
// import Novedades  from '../components/novedades/novedades'
// import Footer     from '../components/footer/'

//styles
import '../utils/bulma.css';
import '../utils/app.css';


class App extends Component {
  render() {
    console.log(this.props)

    return (
        <div className='App' >
            
            <ForoPage></ForoPage>
            
        </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ...state,
  }
}



const mapDispatchToProps = dispatch => ({

  })

export default connect(mapStateToProps, mapDispatchToProps)(App)



