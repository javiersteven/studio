function Header() {
  return (
    <header className="font-agave mx-auto rounded-lg flex h-20 items-center justify-center flex-row gap-12 max-w-2xl backdrop-blur">
      <a href="/" className="cursor-pointer text-3xl font-bold text-white">javiersteven.studio</a>
      <img src="https://www.samueldiosdado.com/wp-content/uploads/2017/08/Men%C3%BA-hamburguesa-herramienta-practica-o-icono-inutil.png" className="h-7 tablet:hidden" alt="menu" />
      <nav className="hidden tablet:block text-xl text-white">
        <a href="#about-me">about me</a>
        <a href="#articles" className="mx-5">articles</a>
        <a href="#projects">projects</a>
      </nav>
    </header>
  )
}

export { Header }