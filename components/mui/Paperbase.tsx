"use client"
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Header from './Header';

import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from 'react-router-dom'
import { useState, createContext } from 'react';

import './style/Paperbase.scss'
import Sidebar from './Sidebar';

//? Component
import Content from './Content';
import CreateRequestPage from '../create_request/CreateRequestPage';
import EditProfile from '../edit_profile/EditProfile';
import EditOrganization from '../edit_organization/EditOrganization';

interface Props {
  OrganizationPersonID: number;
}

type CountContextValue = {
  navigatorPopup: boolean;
  handlePopupNav: () => void;
};

export const CountContext = createContext<CountContextValue | undefined>(undefined);

export default function Paperbase() {

  const [navigatorPopup, setNavigatorPopup] = useState(false);

  // const CountContext = React.createContext<any>(navigatorPopup, handlePopupNav);

  const handlePopupNav = () => {
    setNavigatorPopup(!navigatorPopup);
    // console.log(navigatorPopup)
  };

  const contextValue: CountContextValue = {
    navigatorPopup,
    handlePopupNav,
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ background: 'linear-gradient(to right, var(--Main-color-1), var(--Secondary-color-1))', color: 'var(--D_white)', zIndex: '2', padding: '.5rem 0', boxSizing: 'border-box' }}>
        <CountContext.Provider value={contextValue}>
          <Header />
        </CountContext.Provider>
      </div>

      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>
        <div className={`Sidebar ${navigatorPopup ? 'active' : ''}`} style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
          <Sidebar popup={navigatorPopup} />
        </div>

        <div style={{
          backgroundColor: '#EAEFF1',
          width: '100%',
          height: '100%',

          // display: 'flex', 
          // alignItems: 'start',
          // justifyContent: 'center', 
          boxSizing: 'border-box',
        }}>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/createRequest' element={<CreateRequestPage />} />
            <Route path='/editProfile' element={<EditProfile />} />
            <Route path='/editOrganization' element={<EditOrganization />} />
          </Routes>
          {/* <div style={{ margin: '2rem',width: '100px', height: '100vh', backgroundColor: 'red'}}></div> */}
        </div>
      </div>
    </div>
  );
}