/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
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

const tansformGridRowId = (param: GridRowId): string => param.toString();

export default function DataGridDemo(props: { to: string }) {
  const { to } = props;

  const [id, setId] = useState('0');
  const history = useHistory();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 180 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 180
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <ArrowForwardIcon />
        </IconButton>
      )
    }
  ];

  const rows = [
    { id: 1, lastName: 'he', firstName: 'Jon', age: 3 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellClick={(e) => history.push(`${to}/${e.id}`)}
      />
    </div>
  );
}
