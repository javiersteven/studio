function Header() {
  return (
    <header className="font-agave mx-auto rounded-lg flex h-20 items-center justify-center flex-row gap-12 max-w-2xl">
      <h1 className="text-3xl font-bold text-white">javiersteven.studio</h1>
      <img src="https://www.samueldiosdado.com/wp-content/uploads/2017/08/Men%C3%BA-hamburguesa-herramienta-practica-o-icono-inutil.png" className="h-7 md:hidden" alt="menu"/>
      <nav className="hidden md:block text-xl text-white">
        <a href="#">home</a>
        <a href="#" className="mx-5">about me</a>
        <a href="#">projects</a>
      </nav>
    </header>
  )
}

export { Header }