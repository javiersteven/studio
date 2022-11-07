import { Articles } from './components/articles'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Banner } from './components/banner'
import { AboutMe } from './components/aboutMe'
import { Projects } from './components/projects'

function App() {
  // remove color: bg-[#282c34]
  return (
    <div className="bg-[#242424] min-h-screen font-agave">
      <div className="bg-[#212121] h-screen bg-no-repeat bg-center bg-cover p-5">
        <Header />
        <Banner />
      </div>
      <main className="tablet:rounded-2xl p-7 m-7 max-w-2xl mx-auto">
        <AboutMe />
        {/* 
        <Projects />
        <Articles />
        */}
      </main>
      <Footer />
    </div>
  )
}

export { App }
