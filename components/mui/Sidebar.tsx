import Image from 'next/image';
import React from 'react'
import { signOut } from 'next-auth/react'

// ? Images
import Profile from './image/Profile_phototype.jpg'

// ? Css
import './style/Sidebar.scss'

// ? Route
import { NavLink } from 'react-router-dom';

const categories = [
  {
    id: 'สร้างคำร้อง',
    children: [
      {
        id: 'สร้างคำขอตรวจสอบคุณวุฒิ',
        icon:
          <svg className='CreateRequest-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#757575" strokeWidth="1.5" />
            </g>

          </svg>

        ,
        link: '/createRequest'
        // active: true,
      },
    ],
  },
  {
    id: 'จัดการข้อมูล',
    children: [
      {
        id: 'แก้ไขข้อมูลส่วนตัว',
        icon:
          <svg className='EditProfile-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <circle cx="9" cy="9" r="2" stroke="#757575" strokeWidth="1.5" />
              <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#757575" strokeWidth="1.5" />
              <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#757575" strokeWidth="1.5" />
              <path d="M19 12H15" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19 9H14" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19 15H16" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
            </g>

          </svg>
        ,
        link: '/editProfile'
      },

      {
        id: 'แก้ไขข้อมูลหน่วยงาน',
        icon:
          <svg className='EditOrganization-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

            <g id="SVGRepo_iconCarrier">
              <path d="M22 22L2 22" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M21 22V6C21 4.11438 21 3.17157 20.4143 2.58579C19.8285 2 18.8857 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1143 3.05733 11.0223 3.76022 11.0044 5" stroke="#757575" strokeWidth="1.5" />
              <path d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22" stroke="#757575" strokeWidth="1.5" />
              <path d="M9 22V19" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 8H12" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 11H12" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 14H12" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
            </g>

          </svg>
        ,
        link: '/editOrganization'
      },
    ],
  },
];

interface PopupType {
  popup: boolean
}

export default function Sidebar(PopupSidebar: PopupType) {

  return (
    <div className={`Sidebar-detail ${PopupSidebar.popup ? 'active' : ''}`}>
      <div className={`Profile-detail`}>
        <Image src={Profile} alt='Logo-profile ' />
        <div className={`Data-of-profile text-center`}>
          <p style={{ fontWeight: 600, fontSize: '18px' }}>วัฒนา ภีระจิ่ง</p>
          <p style={{ fontWeight: 500, fontSize: '14px' }}>นักวิชาการศึกษา</p>
          <p style={{ fontWeight: 600, fontSize: '14px' }}>มหาวิทยาลัยพะเยา</p>
        </div>
      </div>

      <hr />

      <div className='List-menu-sidebar'>
        <div>
          <NavLink className={`Sidebar-bt m-0`} to='/'>
            <svg className='Homepage-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

              <g id="SVGRepo_iconCarrier">
                <path d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" stroke="#757575" strokeWidth="1.5" />
                <path d="M15 18H9" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
              </g>

            </svg>
            <p style={{ paddingTop: '2px' }}>หน้าแรก</p>
          </NavLink>

          <hr />

          {categories.map(({ id, children }, index) => (
            <div key={index}>
              <div className='Header-group-menu'>
                <h4>{id}</h4>
              </div>
              {children.map(({ id: childId, icon, link }, index) => (
                <NavLink className={`Sidebar-bt`} to={link} key={index}>
                  {icon}
                  <p>{childId}</p>
                </NavLink>
              ))}

              <hr />

            </div>
          ))}
        </div>

        <div>
          <hr />
          <NavLink className={`Sidebar-bt m-0`} to='#' onClick={() => signOut()}>
            <svg className='Logout-icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

              <g id="SVGRepo_iconCarrier">
                <path d="M8.00195 7C8.01406 4.82497 8.11051 3.64706 8.87889 2.87868C9.75757 2 11.1718 2 14.0002 2H15.0002C17.8286 2 19.2429 2 20.1215 2.87868C21.0002 3.75736 21.0002 5.17157 21.0002 8V16C21.0002 18.8284 21.0002 20.2426 20.1215 21.1213C19.2429 22 17.8286 22 15.0002 22H14.0002C11.1718 22 9.75757 22 8.87889 21.1213C8.11051 20.3529 8.01406 19.175 8.00195 17" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#757575" strokeWidth="1.5" />
                <path d="M15 12L6 12M6 12L8 14M6 12L8 10" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

            </svg>
            <p>ออกจากระบบ</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
