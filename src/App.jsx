import { Article } from './components/article'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Banner } from './components/banner'

function App() {
  return (
    <div className="bg-[#242424] min-h-screen font-agave">
      <div className="bg-[url('/src/assets/background.jpg')] h-screen bg-no-repeat bg-center bg-cover p-5">
        <Header />
        <Banner />
      </div>
      <main>
        <Article />
        <Article />
        <Article />
      </main>
      <Footer />
    </div>
  )
}

export { App }
