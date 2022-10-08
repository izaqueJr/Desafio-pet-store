import Header from './components/Header'
import BannerFull from './components/BannerFull';
import CategoriesRow from './components/CategoriesRow';

function App() {

  return (
    <>
      <Header />
      <main>
        <BannerFull src="../src/assets/banner-full.jpg" alt="banner-tv" />
        <CategoriesRow />
      </main>
    </>
  )
}

export default App
