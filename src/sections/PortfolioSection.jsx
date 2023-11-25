import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio px-6 flex flex-col gap-5">
      <h1>Projects willl go here</h1>
      {/* for each project we will render a component*/}
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </section>
  );
};
export default PortfolioSection;
