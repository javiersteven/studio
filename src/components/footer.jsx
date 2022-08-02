import reactSvg from '../assets/react.svg'

const Footer = () => {
  return (
    <footer className="bg-[#2b2929] p-6 flex justify-center flex-row">
      <span className="mr-2 text-lg text-white font-semibold">Hecho con</span>
      <img className="h-7" src={reactSvg} alt="react logo"/>
    </footer>

  )
}

export { Footer }