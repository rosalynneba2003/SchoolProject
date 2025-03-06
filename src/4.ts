// SchoolProject.ts
import React from 'react';

interface Props {
  name: string;
}

const SchoolProject = (props: Props) => {
  const { name } = props;
  return <h1>Welcome, {name}!</h1>;
};

export default SchoolProject;
