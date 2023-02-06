import React, { FC } from 'react';

interface RealReactComponentProps {
  parameter: string;
  method: () => void;
}

export const RealReactComponent: FC<RealReactComponentProps> = ({ parameter, method }) => {
  return <p>{parameter ? parameter : 'Test'}</p>;
}
