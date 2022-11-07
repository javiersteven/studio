const Icon = ({language, path, width = "40px"}) => {
  return (
    <div className="flex flex-col items-center">
      <span>{language}</span>
      <img src={path} width={width}/>
    </div>
  )
}

export {Icon}