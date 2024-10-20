import React from 'react'

// ? Css
import './EditProfile.scss'

export default function EditProfile() {
    return (
        <div style={{
            display: 'flex',

            padding: '2rem',
            boxSizing: 'border-box'
        }}>
            <div className='editProfile container-content'>
                <div className='container-content-header'>
                    <div className='header-logo-img'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <circle cx="12" cy="6" r="4" stroke="#000" strokeWidth="1.5" />
                                <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="#000" strokeWidth="1.5" />
                            </g>

                        </svg>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 500, padding: '0 .5rem' }}>แก้ไขข้อมูลส่วนตัว</span>
                </div>

                <div className='container-content-detail'>
                    <div>
                        {/* ผู้ใช้งานจากหน่วยงาน */}
                        <div className='sub-topic'>
                            <div>
                                <div className='sub-topic-logo-img'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <circle cx="9" cy="9" r="2" stroke="#fff" strokeWidth="1.5" />
                                            <path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="#fff" strokeWidth="1.5" />
                                            <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#fff" strokeWidth="1.5" />
                                            <path d="M19 12H15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M19 9H14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M19 15H16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <span style={{ padding: '0 .5rem' }}>ผู้ใช้งานจากหน่วยงาน : มหาวิทยาลัยพะเยา</span>
                        </div>

                        {/* 1 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ชื่อ-สกุล <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(ไม่ต้องใส่คำนำหน้า)</span></span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 2 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ตำแหน่ง</span>
                            </div>
                            <input type="text" className='topic-input-box' />
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>อีเมล</span>
                            </div>
                            <input type="text" className='topic-input-box' />
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>กรอกรหัสผ่านปัจจุบัน</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>
                    </div>

                    <hr style={{ margin: '.75rem 0' }} />

                    <div>
                        {/* กรอกรหัสผ่านใหม่ */}
                        <div className='sub-topic'>
                            <div>
                                <div className='sub-topic-logo-img'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.75 2C15.75 1.58579 15.4142 1.25 15 1.25C14.5858 1.25 14.25 1.58579 14.25 2V4.00018C14.25 4.00071 14.25 4.00124 14.25 4.00178V19.9982C14.25 19.9988 14.25 19.9993 14.25 19.9998V22C14.25 22.4142 14.5858 22.75 15 22.75C15.4142 22.75 15.75 22.4142 15.75 22V20.7445C16.9594 20.7321 17.9701 20.6908 18.8089 20.5484C19.8369 20.374 20.6807 20.0368 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V11.9436C22.75 10.1058 22.75 8.65018 22.5969 7.51098C22.4392 6.33855 22.1071 5.38961 21.3588 4.64124C20.6807 3.96316 19.8369 3.626 18.8089 3.45158C17.9701 3.30925 16.9594 3.26793 15.75 3.2555V2ZM15.75 4.75569V19.2443C16.9362 19.2316 17.8391 19.1915 18.558 19.0696C19.3998 18.9267 19.9131 18.6831 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.9131 5.31689 19.3998 5.07329 18.558 4.93044C17.8391 4.80847 16.9362 4.76835 15.75 4.75569Z" fill="#fff" />
                                            <path d="M9.94358 3.25C8.10582 3.24998 6.65019 3.24997 5.51098 3.40313C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H12C12.4142 20.75 12.75 20.4142 12.75 20C12.75 19.5858 12.4142 19.25 12 19.25H10C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02503 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73851 2.88976 7.71085C3.02503 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H12C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L9.94358 3.25Z" fill="#fff" />
                                            <path d="M8 13C8.55229 13 9 12.5523 9 12C9 11.4477 8.55229 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="#fff" />
                                            <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#fff" />
                                        </g>

                                    </svg>
                                </div>
                            </div>
                            <span style={{ padding: '0 .5rem' }}>กรณีกรอกรหัสผ่านใหม่</span>
                        </div>

                        {/* 1 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รหัสผ่านใหม่ <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(ความยาว 8 - 25 ตัวอักษร)</span></span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 2 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ยืนยันรหัสผ่านอีกครั้ง</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>
                    </div>

                    <hr style={{ margin: '.75rem 0' }} />

                    <div className='success-bt'>
                        {/* <label htmlFor="" style={{ fontSize: '14px' }}>บันทึกข้อมูล</label> */}
                        <button style={{ width: '100%', padding: '.5rem' }}>ยืนยันการแก้ไขข้อมูลส่วนตัว</button>
                        {/* <button style={{ padding: '.25rem' }}>กลับหน้าหลัก</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
