import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import ProductList from './components/ProductList/ProductList';
function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, [tg])
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="App">
      <Header />
      <Categories />
      <ProductList />
    </div>
  );
}

export default App;
