import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Contacts from './Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';

import Header from './Components/layout/Header';

import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

// TEST COMPONENT //
import Test from './Components/test/Test';
// TEST COMPONENT //

import {Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
          <Provider>
             <Router>
                <div className="App">
                   <Header branding="cool"/>
                   <div className="container">
                      <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/contact/add" component={AddContact} />
                        <Route exact path="/contact/edit/:id" component={EditContact} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/test" component={Test} />
                        <Route component={NotFound} />
                      </Switch>
                   </div>
               </div>
             </Router>
        </Provider>);
    }
}

export default App;
