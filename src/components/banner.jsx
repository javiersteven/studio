const Banner = () => {
  return (
    <div className="h-4/6 max-w-2xl mx-auto flex justify-center items-center flex-col rounded-md mt-6 text-white font-agave bg-black">
      <h1 className="text-3xl font-bold">Javier Steven</h1>
      <p className="text-2xl font-semibold">Desarrollador FullStack Jr</p>
      <div className="flex flex-row gap-x-6 mt-3">
        <p>JavaScript</p>
        <p>NodeJS</p>
        <p>ReactJS</p>
        <p>Python</p>
      </div>
    </div>
  )
}

export { Banner }