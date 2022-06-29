import logo from './logo.svg';
import './App.css';
//import Component from "./Components/Component"
import Footer from "./Components/Footer"
import Card from "./Components/Card"
import img from './images/image-equilibrium.jpg'
import simbol from './images/icon-ethereum.svg'
import avatar from './images/image-avatar.png'



export default function App() {
  return (
    <div>
      <Card 
      id='3429'
      title='Equilibrium'
      description='Our Equilibrium collection promotes balance and calm.'
      img = {img}
      price='0.0041'
      coin='ETH'
      simbol={simbol}
      time='3 days'
      authorname='Jules Wyvern'
      authorimg={avatar}
      />
      <Footer/>
    </div>
  );
}

