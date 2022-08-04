import { Articles } from './components/articles'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Banner } from './components/banner'
import { AboutMe } from './components/aboutMe'
import { Projects } from './components/projects'

function App() {
  return (
    <div className="bg-[#242424] min-h-screen font-agave">
      <div className="bg-[url('/src/assets/background.jpg')] h-screen bg-no-repeat bg-center bg-cover p-5">
        <Header />
        <Banner />
      </div>
      <main className="tablet:rounded-2xl p-7 m-7 max-w-2xl mx-auto bg-[#282c34]">
        <AboutMe />
        <Projects />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}

export { App }
