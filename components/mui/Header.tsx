import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { ListItemIcon } from '@mui/material';

import './style/Header.scss'
import { useContext } from 'react';

import { CountContext } from './Paperbase'

export default function Header() {
  const contextValue = useContext(CountContext);


  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: '', padding: '' }}>
      <div className='flex items-center' style={{ margin: '' }}>
        <div className='flex items-center justify-center' style={{ width: '40px', height: '40px', margin: '0 .5rem' }}>
          <ListItemIcon sx={{
            borderRadius: '100%',

            padding: '.35rem',
            ":hover": { backgroundColor: 'rgb(251, 251, 253, .2)' }
          }} onClick={contextValue?.handlePopupNav}>
            <MenuIcon />
          </ListItemIcon>
        </div>
        <h5 className='text-base' style={{ fontWeight: '500', padding: '0 .25rem' }}>ระบบตรวจสอบคุณวุฒิทางการศึกษา กองบริการการศึกษา มหาวิยาลัยพะเยา</h5>
      </div>

    </div>
  );
}