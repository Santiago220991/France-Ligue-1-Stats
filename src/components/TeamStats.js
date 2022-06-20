import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const TeamStats = () => {
  const { name } = useParams();
  console.log(useParams);
  const Store = useSelector((store) => store.teams);
  console.log(Store);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default TeamStats;
