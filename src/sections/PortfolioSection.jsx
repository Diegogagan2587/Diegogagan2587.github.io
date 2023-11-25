import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio px-6 py-28 flex flex-col gap-24">
      {/* for each project we will render a component*/}
      {projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </section>
  );
};
export default PortfolioSection;
