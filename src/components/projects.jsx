const projects = [
  {
    project: 'data-analysis',
    language: 'python3',
    description: 'python3 + matplotlib + numpy + pandas',
  },
  {
    project: 'todo-js',
    language: 'javascript',
    description: 'react & react-router-dom',
  },
  {
    project: 'js-list',
    language: 'javascript',
    description: 'react, redux-toolkit, react-router-dom, firebase',
  },
  {
    project: 'sqli',
    language: 'javascript',
    description: 'express & mysql',
  },
  {
    project: 'c the programming language',
    language: 'c',
    description: 'solutions for the book \'c the programming language\'',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="my-8">
      <h3 className="tracking-wider text-5xl font-bold text-[#61AFEF]">Projects</h3>
      {projects.map(({project, language, description}) => {
        return (
          <div key={project}>
            <h4 className="text-xl text-[#E5C07B]">{project}</h4>
            <h4 className="text-[#98c379]">{language}</h4>
            <p>{description}</p>
          </div>
        )
      })}
    </section>
  )
}

export { Projects }
