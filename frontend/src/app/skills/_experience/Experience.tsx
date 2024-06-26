import React, { FunctionComponent } from 'react';
import data from './data';
import ExperienceItems from '@/app/skills/_experience/_experience-items/ExperienceItems';

const Experience: FunctionComponent = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      <ExperienceItems experienceItems={data} />
    </section>
  );
};

export default Experience;