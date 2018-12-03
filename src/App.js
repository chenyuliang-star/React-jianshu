import React, { Component } from 'react';
import Header from "./common/header/index";
import { Provider } from "react-redux";
import store from "./store/index"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";



class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div>

          <BrowserRouter>
            <div>
             <Header />
             <Route path = '/' exact  component = { Home } ></Route>
             <Route path = '/detail/:id' exact component = { Detail } ></Route>
            
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
