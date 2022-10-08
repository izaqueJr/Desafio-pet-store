import Header from './components/Header'
import BannerFull from './components/BannerFull';
import CategoriesRow from './components/CategoriesRow';
import Shelf from './components/Shelf';
import { destaques, novidades } from './components/Api';

import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <BannerFull src="../src/assets/banner-full.jpg" alt="banner-tv" />
        <CategoriesRow />
        <Shelf title="NOVIDADES" collection={novidades} />
        <Shelf title="MAIS VENDIDOS" collection={destaques} />
        <footer>
          
        </footer>
      </main>
    </>
  )
}

export default App
