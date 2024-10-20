"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import './page.scss'

interface Province {
  ProvinceID: number;
  ProvinceNameTh: string;
  ProvinceNameEh?: string;
  // ShowDistricts?: District[]
}

interface District {
  DistrictID: number;
  DistrictNameTh: string;
  DistrictNameEh?: string;
  ProvinceID: number;
  // ShowSubDistricts?: SubDistricts[]
}

interface SubDistricts {
  SubDistrictID: number;
  SubDistrictNameTh: string;
  DistrictID: number;
}

function page() {
  const router = useRouter();

  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [subDistricts, setSubDistricts] = useState<SubDistricts[]>([]);

  const currentDate = new Date().toISOString();
  const [formData, setFormData] = useState({
    OrganizationEmail: '',
    OrganizationName: '',
    DivisionName: '',

    Address: '',
    ProvinceID: 0,
    DistrictID: 0,
    SubDistrictID: 0,
    PostalCode: '',

    PhoneNumber: '',
    SupervisorName: '',
    OrganizationType: '',
    LoginStatus: 'N',

    OrganizationStatus: 'W',
    FileUpload: '',

    RecordStatus: 'Y',
    CreateDate: currentDate,
    CreateUser: '',
    LastDate: currentDate,
    LastUser: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/address-select");

      const data: Province[] = await response.json();
      setProvinces(data);

    };

    fetchData();
  }, []);

  const selectDistrict = async (e: any) => {

    // setProvince(Number(e.target.value))
    setFormData((selectValue) => ({...selectValue, ProvinceID: Number(e.target.value)}))

    const response = await fetch(`http://localhost:5000/address-select?ProvinceID=${e.target.value}`)

    const data: District[] = await response.json();
    setDistricts(data)


    // *clear data
    // setDistrict(0)
    setFormData((selectValue) => ({...selectValue, DistrictID: 0}))

    setSubDistricts([])
    // setSubDistrict(0)
    setFormData((selectValue) => ({...selectValue, SubDistrictID: 0}))
  }

  const selectSubDistrict = async (e: any) => {

    // setDistrict(Number(e.target.value))
    setFormData((selectValue) => ({...selectValue, DistrictID: Number(e.target.value)}))

    const response = await fetch(`http://localhost:5000/address-select?DistrictID=${e.target.value}`)

    const data: SubDistricts[] = await response.json();
    setSubDistricts(data)

    // *clear data
    // setSubDistrict(0)
    setFormData((selectValue) => ({...selectValue, SubDistrictID: 0}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log({
    //   formData: formData
    // });

    try {

      // ? Add data to Database
      // * await fetch(`http://localhost:5000/organization/manage`, {
      // *   method: 'POST',
      // *   headers: { 'Content-Type': 'application/json' },
      // *   body: JSON.stringify(formData)
      // * })

      // router.push('http://localhost:3000/testForm/checkFormRegister')

      // ? GET data of OrganizationEmail *show OrganizationID
      const res = await fetch(`http://localhost:5000/organization/manage?OrganizationEmail=${formData.OrganizationEmail}`, {
        cache: 'no-store',
      })

      const OrganizationData = await res.json()

      console.log(OrganizationData.OrganizationID)

      router.push(`/testForm/registerForm/${OrganizationData.OrganizationEmail}`)

      // window.location.reload();
    } catch (error) {
      console.log('Error submitting form data: ', error)
    }
  }
  
  return (
    <div className='page-form-register'>
        <div className='background'>
            <div className="wrapper container py-4">
              <div className="form-box register px-2">
                <h2 className='m-0'>ขอสิทธิ์เข้าใช้งานหน่วยงานใหม่</h2>
                <h5 className='mb-0'>ขั้นตอนที่ 1/3: กรอกข้อมูลหน่วยงานเพื่อสร้างแบบฟอร์มขอสิทธิ์</h5>
                <form onSubmit={handleSubmit}>

                  <div className="input-box">
                    <label>อีเมลของท่านสำหรับติดต่อกลับ</label>
                    <input 
                      inputMode="email"
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, OrganizationEmail: e.target.value, CreateUser: e.target.value, LastUser: e.target.value}))}
                    />
                  </div>
                  
                  <div className="input-box">
                    <label>ชื่อหน่วยงานของท่าน</label>
                    <input 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, OrganizationName: e.target.value}))}
                    />
                  </div>

                  <div className="input-box">
                    <label>ชื่อส่วนงาน/ฝ่าย ที่ท่านสังกัด</label>
                    <input 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, DivisionName: e.target.value}))}
                    />
                  </div>

                  <div className="input-box">
                    <label>ที่อยู่หน่วยงาน</label>
                    <input 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, Address: e.target.value}))}
                    />
                  </div>

                  <div className='mas-address'>
                    <div className="input-box">
                      <label>จังหวัด</label>
                      <select onChange={selectDistrict} >
                        <option></option>
                        {provinces.map((province) => (
                          <option key={province.ProvinceID} value={province.ProvinceID}>
                            {province.ProvinceNameTh}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="input-box">
                      <label>อำเภอ</label>
                      <select onChange={selectSubDistrict} >
                        <option></option>
                        {districts.map((district) => (
                          <option key={district.DistrictID} value={district.DistrictID}>
                            {district.DistrictNameTh}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="input-box">
                      <label>ตำบล</label>
                      <select onChange={(e) => setFormData((selectValue) => ({...selectValue, SubDistrictID: Number(e.target.value)}))} >
                        <option></option>
                        {subDistricts.map((subDistrict) => (
                          <option key={subDistrict.SubDistrictID} value={subDistrict.SubDistrictID}>
                            {subDistrict.SubDistrictNameTh}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="input-box">
                    <label>รหัสไปรษณีย์</label>
                    <input 
                      inputMode='numeric' 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, PostalCode: e.target.value}))}
                    />
                  </div>

                  <div className="input-box">
                    <label>เบอร์โทรศัพท์หน่วยงาน</label>
                    <input 
                      inputMode="tel" 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, PhoneNumber: e.target.value}))}
                    />
                  </div>

                  <div className="input-box">
                    <label>หัวหน้าหน่วยงาน (สำหรับเรียนถึงในบันทึกข้อความ)</label>
                    <input 
                      onChange={(e) => setFormData((selectValue) => ({...selectValue, SupervisorName: e.target.value}))}
                    />
                  </div>

                  <div className="input-box mb-3">
                    <label>ประเภทหน่วยงาน</label>
                    <select onChange={(e) => setFormData((selectValue) => ({...selectValue, OrganizationType: e.target.value}))} >
                      <option></option>
                      <option>สถานศึกษา</option>
                      <option>โรงพยาบาล</option>
                      <option>ราชการ</option>
                      <option>รัฐวิสาหกิจ</option>
                      <option>บริษัท</option>
                      <option>บริษัทจัดหางาน</option>
                      <option>ธนาคาร</option>
                    </select>
                  </div>

                  <button className='w-full bg-indigo-600 border-0 rounded text-white hover:bg-indigo-700'>บันทึกข้อมูลหน่วยงาน</button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page