import styles from './ProjectsStyles.module.css';
import chatapp from '../../assets/chatapp.png'
import object from '../../assets/object.png'
import techshop from '../../assets/techshop.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={techshop}
          link="https://e-commerce-website-l06q.onrender.com/"
          h3="Tech Shop"
          p="E-Commerce"
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Chat IO"
          p="Real Time Chat"
        />
        <ProjectCard
          src={object}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Object Detection"
          p="Plastic Detection with AWS"
        />

      </div>
    </section>
  );
}

export default Projects;
