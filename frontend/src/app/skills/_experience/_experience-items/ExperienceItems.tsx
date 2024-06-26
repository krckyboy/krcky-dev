'use client';
import React, { FunctionComponent, useState } from 'react';
import styles from './styles.module.scss';
import parentStyles from '../../styles.module.scss';
import { Experience } from '../data';
import { convertToString, formatDuration } from './scripts';

interface Props {
  experienceItems: Experience[];
}

const ExperienceItems: FunctionComponent<Props> = ({ experienceItems }) => {
  const [activeExperience, setActiveExperience] = useState(experienceItems[0].companyName);

  return (
    <>
      <ul className={parentStyles.list}>
        {experienceItems.map((experience) => (
          <li onClick={() => setActiveExperience(experience.companyName)} key={experience.companyName}
              className={`${activeExperience === experience.companyName ? parentStyles.active : ''}`}>
            <span>{experience.companyName}</span>
          </li>
        ))}
      </ul>
      <div className={`${styles.content} ${parentStyles.content}`}>
        {experienceItems.map((experience) => (
          <div key={experience.companyName}
               className={`${activeExperience === experience.companyName ? parentStyles.active : ''} ${parentStyles.item}`}>
            {experience.position.map(({ title, endDate, startDate, location, achievements }) => (
              <div key={title} className={styles.position}>
                <h3 className={styles.title}>{title}</h3>
                <p
                  className={styles.duration}>{convertToString(startDate, endDate)} | {formatDuration(startDate, endDate)}</p>
                <p className={styles.location}>{location}</p>
                <ul className={parentStyles.listContent}>
                  {achievements.map((achievement, index) => (
                    <li className={parentStyles.listContentItem} key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceItems;