'use client';
import React, { FunctionComponent, useState } from 'react';
import styles from '@/app/skills/skills/tech-skills/styles.module.scss';
import { Skill } from '@/app/skills/skills/types';

interface Props {
  skills: Skill[];
}

const SkillItem: FunctionComponent<Props> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(skills[0].title);

  return (
    <>
      <ul className={styles.list}>
        {skills.map((skill) => (
            <li onClick={() => setActiveSkill(skill.title)} key={skill.title}
                className={`${activeSkill === skill.title ? styles.active : ''}`}>
              <span>{skill.title}</span>
            </li>
          )
        )}
      </ul>
      <ul className={styles.content}>
        {skills.map((skill) => (
            <li key={skill.title}
                className={`${activeSkill === skill.title ? styles.active : ''}`}>
              <p>{skill.content}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default SkillItem;