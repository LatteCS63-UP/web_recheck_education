"use client"
import { createContext, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

// ? Router
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from 'react-router-dom'

// ? Component
import Login from '../../components/login/Login'
import Paperbase from '../../components/mui/Paperbase'

interface Organization {
  OrganizationEmail: string;
  OrganizationName: string;
  DivisionName: string;

  Address: string;
  ProvinceNameTh: string;
  DistrictNameTh: string;
  SubDistrictNameTh: string;
  PostalCode: string;

  PhoneNumber: string;
  SupervisorName: string;
  OrganizationType: string;
  LoginStatus: string;

  OrganizationFileStatus: string;
}

type ViewOrgPersonInformationType = {
  OrganizationID: number;
  OrganizationPersonID: number;
}

export const ViewOrgPersonInformation_Value = createContext<ViewOrgPersonInformationType | undefined>(undefined);

export default function Page() {
  const { data: session }: any = useSession()

  const [organizationData, setOrganizationData] = useState({
    OrganizationEmail: '',
    OrganizationName: '',
    DivisionName: '',

    Address: '',
    ProvinceNameTh: '',
    DistrictNameTh: '',
    SubDistrictNameTh: '',
    PostalCode: '',

    PhoneNumber: '',
    SupervisorName: '',
    OrganizationType: '',
    LoginStatus: '',

    OrganizationFileStatus: ''
  });

  const viewOrgPersonInformation: ViewOrgPersonInformationType = {
    OrganizationID: session?.user?.organizationID,
    OrganizationPersonID: session?.user?.organizationPersonID,
  }

  useEffect(() => {
    const fetchDate = async () => {
      try {
        if (organizationData.OrganizationFileStatus) {
          const response = await fetch(`http://localhost:5000/organization/manage?OrganizationID=${session?.user?.organizationID}`)
          const data = await response.json();
          setOrganizationData(data);

        } else {
          const response = await fetch(`http://localhost:5000/organization/manage?OrganizationID=${session?.user?.organizationID}&OrganizationFileStatus=${organizationData.OrganizationFileStatus}`)
          const data = await response.json();
          setOrganizationData(data);
        }

        // ? const response = await fetch(`http://localhost:5000/organization/manage?OrganizationID=${session?.user?.organizationID}&OrganizationFileStatus=${organizationData.OrganizationFileStatus}`)
        // ? const data = await response.json();
        // ? setOrganizationData(data);
        // ? console.log(organizationData)

      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    };

    if (session) {
      fetchDate();

    } else {
      console.log('data null')

    }
  }, [session, organizationData.OrganizationFileStatus]);

  if (session) {
    if (organizationData.OrganizationFileStatus === 'W') {
      return (
        <div>รอดำเนินการ<button onClick={() => signOut()}>Sign Out</button></div>
      )
    } else if (organizationData.OrganizationFileStatus === 'P') {

      return (
        <BrowserRouter>
          <ViewOrgPersonInformation_Value.Provider value={viewOrgPersonInformation}>
            <Paperbase />
          </ViewOrgPersonInformation_Value.Provider>
        </BrowserRouter>
      )
    } else {
      return (
        <div>ไม่ผ่าน<button onClick={() => signOut()}>Sign Out</button></div>
      )
    }

  } else {
    return (
      <div>
        <Login />
      </div>
    )
  }
}