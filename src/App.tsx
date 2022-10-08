import Header from './components/Header'
import BannerFull from './components/BannerFull';
import CategoriesRow from './components/CategoriesRow';
import Shelf from './components/Shelf';
import MidBanner from './components/MidBanner/index';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

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
        <MidBanner/>
        <Shelf title="MAIS VENDIDOS" collection={destaques} blockClass="destaques"/>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
