import { Icon } from "./icon.jsx"

const Banner = () => {
  return (
    <div className="h-4/6 max-w-2xl mx-auto flex justify-center items-center flex-col rounded-md mt-6 text-white font-agave bg-[#312d2d]">
      <h1 className="text-3xl font-bold">Javier Barrera</h1>
      <p className="text-2xl font-semibold">Desarrollador FrontEnd Jr.</p>
      <div className="flex flex-row gap-x-6 mt-3">
        <Icon path="../assets/html5.svg" language="HTML" width="38px"/>
        <Icon path="../assets/js.svg" language="JavaScript" />
        <Icon path="../assets/css3-alt.svg" language="CSS" width="38px"/>
        <Icon path="../assets/python.svg" language="Python" />
      </div>
    </div>
  )
}

export { Banner }