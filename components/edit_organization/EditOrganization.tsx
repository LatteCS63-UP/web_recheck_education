import React from 'react'

// ? Css
import './EditOrganization.scss'

export default function EditOrganization() {
    return (
        <div style={{
            display: 'flex',

            padding: '2rem',
            boxSizing: 'border-box'
        }}>
            <div className='editOrganization container-content'>
                <div className='container-content-header'>
                    <div className='header-logo-img'>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <path d="M22 22L2 22" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#000" strokeWidth="1.5" />
                                <path d="M21 22V11.5C21 10.0955 21 9.39331 20.6629 8.88886C20.517 8.67048 20.3295 8.48298 20.1111 8.33706C19.6067 8 18.9045 8 17.5 8" stroke="#000" strokeWidth="1.5" />
                                <path d="M3 22V11.5C3 10.0955 3 9.39331 3.33706 8.88886C3.48298 8.67048 3.67048 8.48298 3.88886 8.33706C4.39331 8 5.09554 8 6.5 8" stroke="#000" strokeWidth="1.5" />
                                <path d="M12 22V19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 5H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 8H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 11H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M10 14H14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                            </g>

                        </svg>
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 500, padding: '0 .5rem' }}>แจ้งขอแก้ไขข้อมูลหน่วยงาน</span>
                </div>

                <div className='container-content-detail'>
                    <div>
                        {/* หน่วยงาน */}
                        <div className='sub-topic'>
                            <div>
                                <div className='sub-topic-logo-img'>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M22 22L2 22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M21 22V6C21 4.11438 21 3.17157 20.4143 2.58579C19.8285 2 18.8857 2 17 2H15C13.1144 2 12.1716 2 11.5858 2.58579C11.1143 3.05733 11.0223 3.76022 11.0044 5" stroke="#fff" strokeWidth="1.5" />
                                            <path d="M15 22V9C15 7.11438 15 6.17157 14.4142 5.58579C13.8284 5 12.8856 5 11 5H7C5.11438 5 4.17157 5 3.58579 5.58579C3 6.17157 3 7.11438 3 9V22" stroke="#fff" strokeWidth="1.5" />
                                            <path d="M9 22V19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6 8H12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6 11H12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6 14H12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>

                                    </svg>
                                </div>
                            </div>
                            <span style={{ padding: '0 .5rem' }}>หน่วยงาน : มหาวิทยาลัยพะเยา</span>
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ผู้ยื่นขอแก้ไขข้อมูล</span>
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ชื่อหน่วยงาน</span>
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ชื่อส่วนงาน</span>
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ที่อยู่</span>
                            </div>
                            <input type="text" className='topic-input-box' />
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>จังหวัด</span>
                            </div>
                            <input type="text" className='topic-input-box' />
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>อำเภอ</span>
                            </div>
                            <input type="text" className='topic-input-box' />
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ตำบล</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 8 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>รหัสไปรษณีย์</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 9 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>เบอร์โทรศัพท์</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 10 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>หัวหน้าหน่วยงาน <span style={{ fontSize: '10px', color: 'var(--D_Gray)' }}>(สำหรับเรียนถึงในบันทึกข้อความ)</span></span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>

                        {/* 11 */}
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
                                <span style={{ fontSize: '14px', margin: '0 .5rem' }}>ประเภทหน่วยงาน</span>
                            </div>
                            <input type="text" className='topic-input-box' />
                        </div>
                    </div>

                    <hr style={{ margin: '.75rem 0' }} />

                    <div className='success-bt'>
                        <button>ยืนยันการแก้ไขข้อมูลหน่วยงาน</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
