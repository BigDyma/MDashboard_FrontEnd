/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridValueGetterParams
} from '@material-ui/data-grid';
import { Link, useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { SettingsInputHdmiTwoTone } from '@material-ui/icons';
import { IProjectResponse } from '../../Models/projectsModels';
import { getUserId } from '../../Services/Auth/SessionParser';
import { getAllProjects } from '../../Services/Projects';

export default function DataGridDemo(props: { to: string }) {
  const { to } = props;

  const [projects, setProjects] = useState<IProjectResponse[]>([
    { id: 0, name: '' }
  ]);

  const history = useHistory();

  useEffect(() => {
    console.log(getUserId(), 'd');
    getAllProjects(getUserId()).then((v) =>
      setProjects(v as IProjectResponse[])
    );
    console.log(projects);
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Project Name', width: 150 },
    { field: 'reports', headerName: 'Reports', width: 180 },
    {
      field: 'Go To',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <ArrowForwardIcon />
        </IconButton>
      )
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={5}
        onCellClick={(e) => {
          console.log(e);
          if (e.field === 'Go To') return history.push(`${to}/${e.id}`);
          return null;
        }}
      />
    </div>
  );
}
