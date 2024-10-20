import React, { useContext, useEffect, useState } from 'react'

import './CreateRequestPage.scss'

import { ViewOrgPersonInformation_Value } from '@/app/page';

interface OrgPersonInformationForCreateRequest {
    PersonEmail: string;
    OrganizationName: string;
}

interface Request {
    OrganizationPersonID: number | null,
    OrganizationRequestCode: string | null,
    RequestDate: string | null,
    RequestStatus: string | null,
    RequestFile: FileList | null,
    RequestEducationFile: FileList | null,
    RequestEducationUrl: string | null,
    RequestEducationLanguage: string | null,
    ResponseEducationLanguage: string | null,
    ResponseType: string | null,
    RequestStudentCount: number,

    RecordStatus: string | null,
    CreateDate: string | null,
    CreateUser: string | null,
    LastDate: string | null,
    LastUser: string | null
}

interface RequestStudentType {
    StudentCode: string | null,
    FirstName: string | null,
    LastName: string | null,
    DegreeID: number | null,
    VerifyStatus: string | null,
    VerifyDate: string | null,

    RecordStatus: string | null,
    CreateDate: string | null,
    CreateUser: string | null,
    LastDate: string | null,
    LastUser: string | null
}

export default function CreateRequestPage() {
    const [orgPersonInformation, setOrgPersonInformation] = useState<OrgPersonInformationForCreateRequest[]>([]);
    const ViewOrgPersonInformation = useContext(ViewOrgPersonInformation_Value);

    const [createRequest, setCreateRequest] = useState<Request>({
        OrganizationPersonID: Number(ViewOrgPersonInformation?.OrganizationPersonID),
        OrganizationRequestCode: null,
        RequestDate: Date(),
        RequestStatus: 'N',
        RequestFile: null,
        RequestEducationFile: null,
        RequestEducationUrl: null,
        RequestEducationLanguage: 'ภาษาไทย',
        ResponseEducationLanguage: 'ภาษาไทย',
        ResponseType: null,
        RequestStudentCount: 0,

        RecordStatus: 'N',
        CreateDate: Date(),
        CreateUser: null,
        LastDate: Date(),
        LastUser: null
    })

    const [createRequestStudent, setCreateRequestStudent] = useState<RequestStudentType[]>([])
    const [statusCreateRequestStudent, setStatusCreateRequestStudent] = useState<Boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/request/OrganizationPersonRequest?OrganizationPersonID=${ViewOrgPersonInformation?.OrganizationPersonID}`);

            const dataRequest = await response.json();
            setOrgPersonInformation(dataRequest);
        };

        fetchData();
    }, [])

    const handleSubmit = async () => {
        console.log(createRequest)
    }

    const handleCreateRequestStudents = async () => {
        // console.log(createRequest.RequestStudentCount)

        if (createRequest.RequestStudentCount != 0) {

            // * Clear array of createRequestStudent to null
            setCreateRequestStudent([]);

            // * set statusCreateRequestStudent to true
            // * for to show topic
            setStatusCreateRequestStudent(true)

            // * function to show RequestStudent according to quantity
            const newRequestStudents: RequestStudentType[] = [];
            for (let i = 1; i <= createRequest.RequestStudentCount; i++) {
                newRequestStudents.push({
                    StudentCode: null,
                    FirstName: null,
                    LastName: null,
                    DegreeID: null,

                    VerifyStatus: 'W',
                    VerifyDate: Date(),

                    RecordStatus: 'N',
                    CreateDate: Date(),
                    CreateUser: orgPersonInformation[0].PersonEmail,
                    LastDate: Date(),
                    LastUser: orgPersonInformation[0].PersonEmail
                })
            }

            setCreateRequestStudent(newRequestStudents)
        } else {
            // * set statusCreateRequestStudent to true
            // * for to show topic
            setStatusCreateRequestStudent(false)
        }

        //! test
        // const folderPath = '/path/to/your/folder';
        // const folderUrl = new URL(folderPath, window.location.origin).href;

    }
    // console.log(createRequestStudent)

    if (orgPersonInformation.length != 0) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '.5rem',

                maxHeight: '900px',
                // overflow: 'auto',

                padding: '2rem',
                boxSizing: 'border-box',

            }}>
                <div className='createRequest container-content' style={{ margin: 0 }}>
                    <div className='container-content-header'>
                        <div className='header-logo-img'>
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                <g id="SVGRepo_iconCarrier">
                                    <path d="M18.18 8.03933L18.6435 7.57589C19.4113 6.80804 20.6563 6.80804 21.4241 7.57589C22.192 8.34374 22.192 9.58868 21.4241 10.3565L20.9607 10.82M18.18 8.03933C18.18 8.03933 18.238 9.02414 19.1069 9.89309C19.9759 10.762 20.9607 10.82 20.9607 10.82M18.18 8.03933L13.9194 12.2999C13.6308 12.5885 13.4865 12.7328 13.3624 12.8919C13.2161 13.0796 13.0906 13.2827 12.9882 13.4975C12.9014 13.6797 12.8368 13.8732 12.7078 14.2604L12.2946 15.5L12.1609 15.901M20.9607 10.82L16.7001 15.0806C16.4115 15.3692 16.2672 15.5135 16.1081 15.6376C15.9204 15.7839 15.7173 15.9094 15.5025 16.0118C15.3203 16.0986 15.1268 16.1632 14.7396 16.2922L13.5 16.7054L13.099 16.8391M13.099 16.8391L12.6979 16.9728C12.5074 17.0363 12.2973 16.9867 12.1553 16.8447C12.0133 16.7027 11.9637 16.4926 12.0272 16.3021L12.1609 15.901M13.099 16.8391L12.1609 15.901" stroke="#000" strokeWidth="1.5" />
                                    <path d="M8 13H10.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 9H14.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 17H9.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.7715 19.8853 20.9554 18.4796 20.9913 16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                </g>

                            </svg>
                        </div>
                        <span style={{ fontSize: '16px', fontWeight: 500, padding: '0 .5rem' }}>สร้างคำขอตรวจสอบคุณวุฒิ</span>
                    </div>

                    <div className='container-content-detail'>
                        <div>
                            {/* กรอกข้อมูลสำหรับตรวจสอบ */}
                            <div className='sub-topic'>
                                <div>
                                    <div className='sub-topic-logo-img'>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                            <g id="SVGRepo_iconCarrier">
                                                <circle cx="12" cy="6" r="4" stroke="#fff" strokeWidth="1.5" />
                                                <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="#fff" strokeWidth="1.5" />
                                            </g>

                                        </svg>
                                    </div>
                                </div>
                                <span style={{ padding: '0 .5rem' }}>กรอกข้อมูลสำหรับตรวจสอบ</span>
                            </div>

                            {/* 1 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>จากหน่วยงาน</span>
                                </div>
                                <input type="text" className='topic-input-box' value={orgPersonInformation[0].OrganizationName} readOnly />
                            </div>

                            {/* 2 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>อีเมลผู้ยื่นตรวจสอบ</span>
                                </div>
                                <input type="text" className='topic-input-box' value={orgPersonInformation[0].PersonEmail} readOnly />
                            </div>

                            {/* 3 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img'>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>เลขเอกสารของหน่วยงาน</span>
                                </div>
                                <input type="text" className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, OrganizationRequestCode: e.target.value }))} />
                            </div>

                            {/* 4 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img'>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ลงวันที่ <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(เดือน/วัน/ปี ค.ศ.)</span></span>
                                </div>
                                <input type="date" className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestDate: e.target.value }))} />
                            </div>

                            {/* 5 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img'>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>หนังสือขอตรวจสอบ</span>
                                </div>
                                <input type="file" className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestFile: e.target.files }))} />
                                <button className='topic-description-bt'>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 19V18.99M12 16C12 11.5 16 12.5 16 9C16 6.79086 14.2091 5 12 5C10.1361 5 8.57002 6.27477 8.12598 8" stroke="#a3a3a3" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                </button>
                            </div>

                            {/* 6 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img'>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>เอกสารทางการศึกษา</span>
                                </div>
                                <input type="file" className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestEducationFile: e.target.files }))} />
                                <button className='topic-description-bt'>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 19V18.99M12 16C12 11.5 16 12.5 16 9C16 6.79086 14.2091 5 12 5C10.1361 5 8.57002 6.27477 8.12598 8" stroke="#a3a3a3" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                </button>
                            </div>

                            {/* 7 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img'>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ลิ้งค์ไฟล์เอกสารทางการศึกษา</span>
                                </div>
                                <input type="text" className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestEducationUrl: e.target.value }))} />
                                <button className='topic-description-bt'>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 19V18.99M12 16C12 11.5 16 12.5 16 9C16 6.79086 14.2091 5 12 5C10.1361 5 8.57002 6.27477 8.12598 8" stroke="#a3a3a3" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                </button>
                            </div>

                            {/* 8 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ภาษาเอกสารทางการศึกษา</span>
                                </div>
                                <select className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestEducationLanguage: e.target.value }))}>
                                    <option value="ภาษาไทย">ภาษาไทย</option>
                                    <option value="ภาษาอังกฤษ">ภาษาอังกฤษ</option>
                                </select>
                            </div>

                            {/* 9 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รูปแบบภาษาสำหรับตอบกลับ</span>
                                </div>
                                <select className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, ResponseEducationLanguage: e.target.value }))}>
                                    <option value="ภาษาไทย">ภาษาไทย</option>
                                    <option value="ภาษาอังกฤษ">ภาษาอังกฤษ</option>
                                </select>
                            </div>

                            {/* 10 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รูปแบบการตอบกลับ</span>
                                </div>
                                <select className='topic-input-box' onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, ResponseType: e.target.value }))}>
                                    <option value=""></option>
                                    <option value="ไปรษณีย์">ไปรษณีย์</option>
                                    <option value="ออนไลน์">ออนไลน์</option>
                                </select>
                            </div>

                            {/* 11 */}
                            <div className='topic'>
                                <div className='topic-title'>
                                    <div>
                                        <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }} >
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>จำนวนรายการ <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(คน)</span></span>
                                </div>

                                <div className='topic-input-box-count-student'>
                                    <input type="number" min={0} max={200} style={{ width: '100%' }} onChange={(e) => setCreateRequest((selectValue) => ({ ...selectValue, RequestStudentCount: Number(e.target.value) }))} />
                                    <button style={{ width: '100%' }} className='create-form-students-bt' onClick={handleCreateRequestStudents}>สร้างฟอร์มรายชื่อ</button>
                                    <button style={{ width: '100%' }} className='delete-form-students-bt'>ล้างรายชื่อทั้งหมด</button>
                                </div>
                            </div>

                        </div>

                        <hr style={{ margin: '.75rem 0' }} />

                        {statusCreateRequestStudent &&

                            <div>
                                {/* รายชื่อผู้ที่ต้องการขอตรวจสอบคุณวุฒิ */}
                                <div className='sub-topic'>
                                    <div className='sub-topic-logo-img'>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M2 5.5L3.21429 7L7.5 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12.5L3.21429 14L7.5 10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 19.5L3.21429 21L7.5 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 19L12 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M22 12L12 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M22 5L12 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            </g>

                                        </svg>
                                    </div>
                                    <span style={{ padding: '0 .5rem' }}>รายชื่อผู้ที่ต้องการขอตรวจสอบคุณวุฒิ จำนวน {createRequestStudent.length} ราย</span>
                                </div>

                                {/* นักศึกษาแต่ละราย */}
                                <div style={{ maxHeight: '165px', overflow: 'auto', margin: '0 2rem .75rem 2rem' }}>
                                    {createRequestStudent.length > 0 && (

                                        createRequestStudent.map((value, index) => (
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'end',

                                                margin: '.75rem 0',
                                                boxSizing: 'border-box'
                                            }} key={index}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'end',

                                                    paddingBottom: '.25rem',
                                                    boxSizing: 'border-box'
                                                }}>
                                                    <div>
                                                        <div style={{
                                                            display: 'flex',

                                                            backgroundColor: 'var(--Accent-color-2)',
                                                            borderRadius: '57% 43% 48% 52% / 44% 42% 58% 56%',

                                                            padding: '.15rem',
                                                            boxSizing: 'border-box'
                                                        }}>
                                                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                                <g id="SVGRepo_iconCarrier">
                                                                    <circle cx="12" cy="6" r="4" stroke="#fff" strokeWidth="1.5" />
                                                                    <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="#fff" strokeWidth="1.5" />
                                                                </g>

                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รายที่ {index < 9 ? `0${index + 1}` : index + 1}</span>
                                                </div>

                                                <div style={{
                                                    display: 'flex',
                                                    columnGap: '.5rem'
                                                }}>
                                                    {/* 1 */}
                                                    <div className='topic' style={{
                                                        flexDirection: 'column',
                                                        margin: 0
                                                    }}>
                                                        <div className='topic-title' style={{ width: 'auto', margin: 0 }}>
                                                            <div>
                                                                <div className='topic-title-logo-img'>
                                                                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                                        <g id="SVGRepo_iconCarrier">
                                                                            <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </g>

                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รหัสนิสิต</span>
                                                        </div>
                                                        <input type="text" className='topic-input-box' style={{ width: 'auto' }} />
                                                    </div>

                                                    {/* 2 */}
                                                    <div className='topic' style={{
                                                        flexDirection: 'column',
                                                        margin: 0
                                                    }}>
                                                        <div className='topic-title' style={{ width: 'auto', margin: 0 }}>
                                                            <div>
                                                                <div className='topic-title-logo-img'>
                                                                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                                        <g id="SVGRepo_iconCarrier">
                                                                            <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </g>

                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ชื่อ <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(ไม่ต้องกรอกคำนำหน้า)</span></span>
                                                        </div>
                                                        <input type="text" className='topic-input-box' style={{ width: 'auto' }} />
                                                    </div>

                                                    {/* 3 */}
                                                    <div className='topic' style={{
                                                        flexDirection: 'column',
                                                        margin: 0
                                                    }}>
                                                        <div className='topic-title' style={{ width: 'auto', margin: 0 }}>
                                                            <div>
                                                                <div className='topic-title-logo-img'>
                                                                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                                        <g id="SVGRepo_iconCarrier">
                                                                            <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </g>

                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <span style={{ fontSize: '14px', margin: '0 .5rem' }}>นามสกุล</span>
                                                        </div>
                                                        <input type="text" className='topic-input-box' style={{ width: 'auto' }} />
                                                    </div>

                                                    {/* 4 */}
                                                    <div className='topic' style={{
                                                        flexDirection: 'column',
                                                        margin: 0
                                                    }}>
                                                        <div className='topic-title' style={{ width: 'auto', margin: 0 }}>
                                                            <div>
                                                                <div className='topic-title-logo-img' style={{ backgroundColor: '#c12724' }}>
                                                                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                                        <g id="SVGRepo_iconCarrier">
                                                                            <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </g>

                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ระดับการศึกษา</span>
                                                        </div>
                                                        <input type="text" className='topic-input-box' style={{ width: 'auto' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                        }

                        {statusCreateRequestStudent &&
                            <hr style={{ margin: '.75rem 0' }} />
                        }

                        <div className='success-bt'>
                            <button onClick={handleSubmit}>บันทึกข้อมูล</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ width: '300px', display: 'grid', rowGap: '.5rem' }}>
                        <div style={{ borderRadius: '.5rem', backgroundColor: 'rgb(251, 251, 253, .5)', boxShadow: '0px 0px 10px rgb(0, 0, 0, 0.35)', padding: '.5rem', boxSizing: 'border-box' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'var(--Accent-color-2)',
                                    borderRadius: '57% 43% 48% 52% / 44% 42% 58% 56%',

                                    padding: '.25rem',
                                    boxSizing: 'border-box'
                                }}>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M12 19V18.99M12 16C12 11.5 16 12.5 16 9C16 6.79086 14.2091 5 12 5C10.1361 5 8.57002 6.27477 8.12598 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>

                                    </svg>
                                </div>
                                <h4 style={{ padding: '0 .25rem' }}>คำแนะนำ</h4>
                            </div>
                            <hr />
                            <div style={{ margin: '0 .5rem' }}>
                                <h5>คำแนะนำการใช้งาน</h5>
                                <div style={{ fontSize: '12px' }}>
                                    <li style={{ margin: '.25rem 0' }}>
                                        ข้อมูลที่ระบุสัญลักษณ์
                                        <span style={{
                                            backgroundColor: '#c12724',
                                            color: '#c12724',

                                            borderRadius: '57% 43% 48% 52% / 44% 42% 58% 56%',

                                            margin: '0 .25rem'
                                        }}>
                                            .
                                            <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M9 5L15 12L9 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>

                                            </svg>
                                            .
                                        </span>
                                        ต้องกรอกให้ครบทุกช่อง
                                    </li>
                                    <li style={{ margin: '.25rem 0' }}>ให้ระบุจำนวนรายชื่อเป็นตัวเลข (ไม่เกิน 200 คน) และกดปุ่ม "สร้างฟอร์ม" ระบบจะปรากฏช่องกรอกรายชื่อตามจำนวนที่กำหนด</li>
                                    <li style={{ margin: '.25rem 0' }}>หากเลือกจำนวนผิดผลาด สามารถกดปุ่ม "ล้างข้อมูลรายชื่อทั้งหมด" ระบบจะลบข้อมูลในฟอร์มทั้งหมด เพื่อให้ท่านเริ่มกรอกใหม่</li>
                                    <li style={{ margin: '.25rem 0' }}>ปุ่มบนเมนูลัดจะทำงาน เมื่อทำการกด 2 ครั้ง (Double Click)</li>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderRadius: '.5rem', backgroundColor: 'rgb(251, 251, 253, .5)', boxShadow: '0px 0px 10px rgb(0, 0, 0, 0.35)', padding: '.5rem', boxSizing: 'border-box' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{
                                    display: 'flex',
                                    backgroundColor: 'var(--Accent-color-2)',
                                    borderRadius: '57% 43% 48% 52% / 44% 42% 58% 56%',

                                    padding: '.25rem',
                                    boxSizing: 'border-box'
                                }}>
                                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#fff" />
                                            <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#fff" />
                                            <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#fff" />
                                        </g>

                                    </svg>
                                </div>
                                <h4 style={{ padding: '0 .25rem' }}>เมนูลัด</h4>
                            </div>
                            <hr />
                            <div style={{ margin: '0 .5rem' }}>
                                <div>
                                    <h5>บันทึกข้อมูล</h5>
                                    <button className='w-full my-1' style={{ padding: '.25rem' }}>บันทึกข้อมูล</button>
                                </div>
                                <div style={{ marginTop: '.75rem' }}>
                                    <h5>จัดการฟอร์ม</h5>
                                    <button className='w-full my-1' style={{ padding: '.25rem' }}>ล้างรหัสนักศึกษาทั้งหมด</button>
                                    <button className='w-full my-1' style={{ padding: '.25rem' }}>ล้างชื่อทั้งหมด</button>
                                    <button className='w-full my-1' style={{ padding: '.25rem' }}>ล้างนามสกุลทั้งหมด</button>
                                    <button className='w-full my-1' style={{ padding: '.25rem' }}>ล้างข้อมูลส่วนแรกทั้งหมด</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        <div>
            hello2
        </div>
    }
}
