import React from 'react';
import './App.css';
import HeaderComponent from './components/header/headerComponent';
import FooterComponent from './components/footer/footerComponent';
import ProductComponent from './components/products/productComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fbMessengerUrl: "https://m.me/340475816632093" }
  }

  onclick = () => {
    window.open(this.state.fbMessengerUrl, "", "width=600,height=800");
  }

  render() {
    return (
      <div className="App" >
        <HeaderComponent />
        <ProductComponent />
        <FooterComponent />
      </div>
    );
  }
}


