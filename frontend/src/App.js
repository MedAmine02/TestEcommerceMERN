


/**/
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Description from './components/Description';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App () {
  return (
    <>
    <Header/>
    <ProductList/>
    <Footer/>
    </>
  );
}

export default App;

