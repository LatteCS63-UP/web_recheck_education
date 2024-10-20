"use client";
 
import React, { useEffect, useState } from "react";

// ? CSS
import './page.scss'

// ? ICON
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';

// interface User {
//   id: number;
//   email: string;
//   name: string;
//   posts: Post[];
// }

// interface Post {
//   title: string;
// }

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

interface FormData {
  Email: string;
  DivisionName: string;
  SectionName: string;
  Address: string;
  ProvinceID: number;
  DistrictID: number;
  SubDistrictID: number;
  PostOffice: string;
  DivisionPhoneNumber: string;
  SupervisorName: number;
  OrganizationType: string
}
function page() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  // const [province, setProvince] = useState<number>(0);

  const [districts, setDistricts] = useState<District[]>([]);
  // const [district, setDistrict] = useState<number>(0);

  const [subDistricts, setSubDistricts] = useState<SubDistricts[]>([]);
  // const [subDistrict, setSubDistrict] = useState<number>(0);

  const [formData, setFormData] = useState<FormData[]>([]);

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

    console.log({
      formData: formData
    });
  }

  return (
    <div className="py-6" style={{backgroundColor: "#F8F9F9"}}>
      <div className="container mx-auto px-10 py-2" style={{maxWidth: "700px", backgroundColor: "white", border: 1, borderStyle: "solid", borderColor: "#E1E2E2", borderRadius: "0.25rem"}}>
      
        <div className="mt-5 mb-3 flex items-center" style={{color: "#2c3e50"}}>
          <BusinessIcon/>
          <p className="m-0 pt-1 text-2xl font-medium">ขอสิทธิ์เข้าใช้งานหน่วยงานใหม่</p>
        </div>
        <div className="border-solid border-sky-600 rounded p-4" style={{border: "1px"}}>
          <div className="m-0 text-sky-600 text-2xl font-medium flex items-center">
            <CheckCircleIcon className=""/>
            <p className="m-0 pt-1">STEP 1/3</p>
          </div>
          <p className="m-0">ขั้นตอน 1/3: กรอกข้อมูลหน่วยงานเพื่อสร้างแบบฟอร์มขอสิทธิ์ฯ</p>
        </div>

        <hr/>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-3" style={{ width: "100%" }}>

              {/* Email */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6" >อีเมลของท่านสำหรับติดต่อกลับ</label>
                <input 
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600"
                  inputMode="email"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, Email: e.target.value}))}
                 />
              </div>
      
              {/* DivisionName */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">ชื่อหนวยงานของท่าน</label>
                <input
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, DivisionName: e.target.value}))}
                />
              </div>
          
              {/* SectionName */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">ชื่อส่วนงาน/ฝ่าย ที่ท่านสังกัด</label>
                <input
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600" 
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, SectionName: e.target.value}))}
                />
                <label className=" text-xs text-sky-600 mt-1">*ตัวอย่างเช่น ฝ่ายบริหารงานบุคคล เป็นต้น</label>
                <label className=" text-xs text-sky-600 mt-1">*ส่วนงานที่ท่านกรอกนี้ จะถูกระบุในบันทึกข้อความที่ตอบกลับไปหาท่าน</label>
              </div>

              {/* Address */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">ที่อยู่</label>
                <textarea 
                  className="p-2 h-16 focus:outline-none focus:bg-white focus:border-sky-600"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, Address: e.target.value}))}
                />
              </div>

              {/* ProvinceID */}
              <div className="InputFormLogin">
                <label className="mb-1 p-0 h-6">จังหวัด</label>
                <select
                  onChange={selectDistrict}
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600"
                >
                  <option value={0}>กรุณาเลือกจังหวัด</option>
                  {provinces.map((province) => (
                    <option key={province.ProvinceID} value={province.ProvinceID}>
                      {province.ProvinceNameTh}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* DistrictID */}
              <div className="InputFormLogin">
                <label className="mb-1 p-0 h-6">อำเภอ</label>
                <select 
                  onChange={selectSubDistrict}
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600"
                >
                  <option value={0}>กรุณาเลือกอำเภอ</option>
                  {/* Tag null for map (<React.Fragment/>) */}
                  {districts.map((district) => (
                    <option key={district.DistrictID} value={district.DistrictID}>
                      {district.DistrictNameTh}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* SubDistrictID */}
              <div className="InputFormLogin">
                <label className="mb-1 p-0 h-6">ตำบล</label>
                <select 
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, SubDistrictID: e.target.value}))}
                >
                  <option value={0}>กรุณาเลือกตำบล</option>
                  {subDistricts.map((subDistrict) => (
                    <option key={subDistrict.SubDistrictID} value={subDistrict.SubDistrictID}>
                      {subDistrict.SubDistrictNameTh}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* PostOffice */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">รหัสไปรษณีย์</label>
                <input
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600" 
                  inputMode="numeric"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, PostOffice: e.target.value}))}
                />
              </div>
          
              {/* DivisionPhoneNumber */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">เบอร์โทรศัพท์หน่วยงาน</label>
                <input
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600" 
                  inputMode="tel"
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, DivisionPhoneNumber: e.target.value}))}
                />
              </div>
          
              {/* SupervisorName */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">หัวหน้าหน่วยงาน (สำหรับเรียนถึงในบันทึกข้อความ)</label>
                <input
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600" 
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, SupervisorName: e.target.value}))}
                />
                <label className=" text-xs text-sky-600 mt-1">*ตัวอย่างเช่น ผู้อำนวยการสำนักทะเบียนและประมวลผล เป็นต้น</label>
              </div>
              
              {/* OrganizationType */}
              <div className='InputFormLogin'>
                <label className="mb-1 p-0 h-6">ประเภทหน่วยงาน</label>
                <select
                  className="p-2 focus:outline-none focus:bg-white focus:border-sky-600" 
                  onChange={(e) => setFormData((selectValue) => ({...selectValue, OrganizationType: e.target.value}))}
                >
                  <option>กรุณาเลือกประเภทหน่วยงาน</option>
                  <option>สถานศึกษา</option>
                  <option>โรงพยาบาล</option>
                  <option>ราชการ</option>
                  <option>รัฐวิสาหกิจ</option>
                  <option>บริษัท</option>
                  <option>บริษัทจัดหางาน</option>
                  <option>ธนาคาร</option>

                </select>
              </div>
              
              {/* Button submit */}
              <div className="grid mb-10">
                <label className="text-gray-400 text-sm">บันทึกข้อมูล</label>
                <button className="flex items-center justify-center button" type="submit" style={{}}>
                  <CheckCircleOutlineIcon sx={{fontSize: "medium"}}/>
                  <p className="pl-2" style={{paddingTop: "1.8px"}}>บันทึกข้อมูลหน่วยงาน</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
