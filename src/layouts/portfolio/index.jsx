import "./portfolio.css";

function Portfolio(){
  return(
    <>
      <div className="portfolio __container__body">
        <h2 className="portfolio__header">Wanna see can I do?</h2>
        <p className="portfolio__content">
          Most of my real projects are private and propietary, so I can't show them... BUT...
          If you wanna see what I'm working on you can see my <span><a href="https://www.frontendmentor.io/profile/robtzcraft" target="_blank">FrontEnd Mentor </a></span>
          profile... or my <span><a href="https://github.com/robtzcraft" target="_blank">GitHub</a></span> for all my public projects.
        </p>
        <a className="portfolio__url" href="https://github.com/robtzcraft/robtz.me/tree/dev" target="_blank">
          <img className="portfolio__url--image" src="robtzcraft.svg" />
          <div className="portfolio__url--content">
            <p className="portfolio__url--contentTitle">Robtz's portfolio repo</p>
            <p className="portfolio__url--contentDescription">Here you can see my progress...</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default Portfolio;
