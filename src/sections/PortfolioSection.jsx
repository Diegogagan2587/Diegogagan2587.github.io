import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio px-6 py-28 flex flex-col gap-24 items-center">
      {/* for each project we will render a component*/}
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} index={index}/>;
      })}
    </section>
  );
};
export default PortfolioSection;
