"use client"

import React, { useEffect, useState } from 'react'

import './page.scss'

// interface OrganizationData {
//     OrganizationID: number;
//     OrganizationEmail: string;
//     OrganizationName: string;
//     DivisionName: string;

//     Address: string;
//     ProvinceNameTh: string;
//     DistrictNameTh: string;
//     SubDistrictNameTh: string;
//     PostalCode: string;

//     PhoneNumber: string;
//     SupervisorName: number;
//     OrganizationType: string;
//     LoginStatus: string;

//     OrganizationStatus: string;
//     FileUpload: string;
//   }

export default function page({params,}: {params: {registerID: string}}) {
  
  const [organization, setOrganization] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:5000/organization/manage?OrganizationEmail=${params.registerID}`)
            const result = await res.json();

            setOrganization(result)

        } catch (error) {
            console.log('Error fetching persons:', error);
        }
    }
    fetchData();
  }, []);

//   if(organization.OrganizationStatus == 'W'){}

  return (
    <div className='background'>
        {organization && (
            // <div className='wrapper'>
            //     <p>อีเมลของท่านสำหรับติดต่อกลับ: {organization.OrganizationEmail}</p>
            //     <p>ชื่อสหน่วยงาน: {organization.OrganizationName}</p>
            //     <p>ชื่อส่วนงาน: {organization.DivisionName}</p>
            // </div>
            <div className="wrapper container py-4">
              <div className='detail'>
                <h2 className='m-0'>ขอสิทธิ์เข้าใช้งานหน่วยงานใหม่</h2>
                <div>
                  <h4 className='mb-0'>ขั้นตอนที่ 2/3 : ดาวโหลดหนังสือขอสิทธิ์ฯ เพื่อให้ผู้มีอำนาจของหน่วยงานลงนามให้หนังสือขอสิทธิ์ฯ</h4>
                  <hr />
                  <div className='detail-organization'>
                    <p>อีเมลของท่านสำหรับติดต่อกลับ: <span>{organization.OrganizationEmail}</span></p>
                    <p>ชื่อสหน่วยงาน: <span>{organization.OrganizationName}</span></p>
                    <p>ชื่อส่วนงาน: <span>{organization.DivisionName}</span></p>
                  </div>
                  <button className='w-full bg-indigo-600 border-0 rounded text-white hover:bg-indigo-700'>ดาวโหลดแบบฟอร์ม</button>
                </div>
                <hr className='mt-6'/>
                <div>
                  <h4 className='mb-0'>ขั้นตอนที่ 3/3 : อัปโหลดหนังสือขอสิทธิ์ฯ เพื่อส่งคำข้อสิทธ์ในการใช้งานระบบ</h4>
                  <hr />
                  {/* <div className='my-2 flex justify-between items-center pl-1 text-xs w-full border-solid border rounded box-border cursor-pointer'>
                    กรุณาเลือกไฟล์ที่ต้องการอัปโหลด (ไม่เกิน 10 MB)
                    <button className='p-1 border-0'>Browse</button>
                  </div> */}

                  {/* <div>
                    <input type='file' hidden/>
                    <span>กรุณาเลือกไฟล์ที่ต้องการอัปโหลด (ไม่เกิน 10 MB)</span>
                    <button className='p-1 border-0'>Browse</button>
                  </div> */}

                  <input type='file' className='w-full h-10 my-2 text-slate-500 cursor-pointer border-solid border rounded border-slate-400 box-border file:h-full file:mr-2 file:border-none file:bg-slate-400 file:text-black'/>
                  <button className='w-full bg-blue-600 border-0 rounded text-white hover:bg-blue-700'>อัปโหลดหนังสือขอสิทธิ์ฯ</button>
                </div>
              </div>
            </div>
        )}
    </div>
  )
}