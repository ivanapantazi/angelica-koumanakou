import React from "react";
import { useParams } from "react-router-dom";
import styles from "./project.module.css";

function Project({ projects, setIsOpen }) {
  const { url } = useParams();

  const project = projects.find((project) => project.slug === url);
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{project.title}</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          ></button>
          <div className={styles.modalContent}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.softwareTags}</p>
            {project.projectAssets.map((item) => (
              <img key={item.url} src={item.url} alt={project.title} />
            ))}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
