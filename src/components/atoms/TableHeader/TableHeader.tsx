import React from 'react';
import type { FC } from 'react';

import { Button } from '../Button';
import './TableHeader.css';
import { Icon } from '../Icon';

interface TableHeaderProps {
  nameView?: string;
  add?: boolean;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const TableHeader: FC<TableHeaderProps> = ({ nameView, add, visible, setVisible }) => {
  const handleModal = (): void => {
    setVisible(!visible);
  };

  return (
    <div className="d-flex flex-container">
      <h3 className="titleView">{nameView}</h3>
      {add && <Button className="button-container" buttonText={'Add user'} onClick={handleModal} />}
      <div className="filter-container">
        <Icon name="filter" color={'#020E33'} width="20" /> <span className="filter">Filters</span>
      </div>
    </div>
  );
};
