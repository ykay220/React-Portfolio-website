interface projectObject {
  id: number;
  img: string;
  github: string;
  live: string;
  techBio: string;
  title: string;
  details: {
    info: string;
  }[];
}

interface Prop {
  projectData: projectObject;
}

const ProjectsCard = ({ projectData }: Prop) => {
  return (
    <div className="workBox" key={projectData.id}>
      <div className="workImageContainer">
        <img src={projectData.img} alt="Podcast Prioritizer landing page." />
      </div>
      <div className="workDescribeContainer">
        <h3>{projectData.title}</h3>
        <h4>{projectData.techBio}</h4>
        <ul>
          {projectData.details.map((detail, index) => (
            <li key={index}>{detail.info}</li>
          ))}
        </ul>
        <div className="workLinks">
          <a href={projectData.live} className="liveLink" target="_blank">
            Live
          </a>
          <a href={projectData.github} className="repoLink" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
