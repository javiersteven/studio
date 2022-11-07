import FaBars from '../assets/fontAwesome/bars-solid.svg'

function Header() {
  return (
    <header className="font-agave mx-auto rounded-lg flex h-20 items-center justify-center flex-row gap-12 max-w-2xl backdrop-blur">
      <a href="/" className="cursor-pointer text-3xl font-bold text-white">javiersteven.studio</a>
      {/*
      <div className='className="h-7 tablet:hidden cursor-pointer' onClick={() => console.log("click")}>
        <img src={FaBars} alt="bars" width="30px"/>
      </div>
      <nav className="hidden tablet:block text-xl text-white">
        <a href="#about-me">about me</a>
        <a href="#articles" className="mx-5">articles</a>
        <a href="#projects">projects</a>
      </nav>
      */}
    </header>
  )
}

export { Header }