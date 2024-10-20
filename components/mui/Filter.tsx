import React from 'react'

// ? Css
import './style/Filter.scss'

export default function Filter() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between', 

            height: '100%',


            padding: '.5rem',
            boxSizing: 'border-box'
        }}>
            <div className='' style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/> 
                        </g>
                    
                    </svg> */}
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier">
                                <path d="M20.4697 21.5303C20.7626 21.8232 21.2375 21.8232 21.5304 21.5303C21.8233 21.2374 21.8233 20.7625 21.5304 20.4696L20.4697 21.5303ZM16.8049 17.8654L20.4697 21.5303L21.5304 20.4696L17.8655 16.8048L16.8049 17.8654Z" fill="#000000" />
                                <path d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L18.0591 13.6098L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555Z" fill="#000000" />
                            </g>

                        </svg>
                        <h3 style={{ marginLeft: '.25rem' }}>ค้นหาแบบละเอียด</h3>
                    </div>

                    <button style={{ display: 'flex', alignItems: 'center', padding: '0 .5rem', backgroundColor: '#fff', border: '1px solid #fd6262', borderRadius: '35% 65% 55% 45% / 47% 37% 63% 53% ', color: '#fd6262' }}>
                        ล้าง
                    </button>
                </div>

                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontWeight: 500, fontSize: '16px' }}>ผู้นำเข้าข้อมูล</h4>
                <input type='' style={{ borderBottom: '1px solid red', borderLeft: 0, borderTop: 0, borderRight: 0, padding: '.25rem .5rem', outline: 0 }} placeholder='ค้นหา...'/>
            </div> */}

                <hr style={{ margin: '1rem 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', margin: '0 0 .25rem 0' }}>
                    <h5>ช่องทางขอตรวจสอบ</h5>

                    <div style={{ margin: '.25rem 0' }}>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ไปรษณีย์</button>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ออนไลน์</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '.25rem 0' }}>
                    <h5 >รูปแบบการตอบกลับ</h5>

                    <div style={{ margin: '.25rem 0' }}>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ไปรษณีย์</button>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ออนไลน์</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '.25rem 0' }}>
                    <h5 >สถานะ</h5>

                    <div style={{ margin: '.25rem 0' }}>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>รอดำเนินการ</button>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>กำลังรอดำเนินการ</button>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ตรวจสอบแล้ว</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '.25rem 0' }}>
                    <h5>ผู้นำเข้าข้อมูล</h5>

                    <div style={{ margin: '.25rem 0' }}>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>วัฒนา ภีระจิ่ง</button>
                        <button style={{ padding: '.5rem', margin: '.25rem', color: '#525252', border: '1px solid #a3a3a3', borderRadius: '53% 47% 82% 18% / 50% 64% 36% 50% ', backgroundColor: '#fff', fontWeight: 500, fontSize: '12px' }}>ธนวัฒน์ บุญชูธวัช</button>
                    </div>
                </div>
            </div>

            <hr />

            <div style={{ marginTop: '.5rem' }}>
                <button className='w-full' style={{ padding: '.5rem', color: '#fff', border: 0, borderRadius: '.25rem', backgroundColor: 'rgb(58, 71, 141, .9)' }}>ค้นหา</button>
            </div>
        </div>
    )
}

