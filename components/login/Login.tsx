'use client'
import * as React from 'react'
import { useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';

// ? MUI
// ? >> Icon
import DomainIcon from '@mui/icons-material/Domain';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// ? CSS
import './Login.scss'

export default function LoginSystem() {
  const [isSignUp, setIsSignUp] = useState(true);

  const [warningEmail, setWarningEmail] = useState(true);
  const [warningPassword, setWarningPassword] = useState(true);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const handleToggle = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn('credentials', {
        PersonEmail: email.current?.value,
        Password: password.current?.value,
        redirect: false,
        callbackUrl
    })

    console.log(res)

    if (res?.error == 'Email_and_Password_not_input') {
        setWarningEmail(false);
        setWarningPassword(false)

    }else if (email == null) {
        setWarningEmail(false);

    }else if (res?.error == 'Email_login_false') {
        // console.log('Email Not have to Database')
        setWarningEmail(false);
        setWarningPassword(true);
        
    } else {
        console.log('Email have to Database');
        setWarningEmail(true);

        if(res?.error == 'Password_login_false') {
            setWarningPassword(false)

        } else {
            console.log('Password true')
            setWarningPassword(true)

            router.push(callbackUrl)
        }
    }
  }

  return (
    <div className='testFormPage px-2'>
        <div className={`container bg-white ${isSignUp ? 'actve': 'active'}`} id='container'>
            <div className='form-container sign-up'>
                <div className='form'>
                    <div className='flex w-full'>
                        <DomainIcon sx={{paddingRight: '0.25rem'}}/>
                        <h5 className='text-xl font-medium'>ขอสิทธิ์เข้าใช้งานหน่วยงานใหม่</h5>
                    </div>
                    <div className='px-2 pt-2 mb-2 w-full' style={{border: '1px solid #dee2e6 !important', borderRadius: '0.25rem', boxSizing: 'border-box'}}>
                        <h4 className='text-base font-medium text-indigo-500'>หน่วยงานดำเนินการขอสิทธิ์ในการเข้าใช้งานระบบ ดังนี้</h4>
                        <hr className='w-full my-2'/>
                        <ol className='text-sm pl-6'>
                            <li className='my-1'>กรอกข้อมูลหน่วยงานเพื่อสร้างแบบฟอร์มขอสิทธิ์ฯ</li>
                            <li className='my-1'>ดาวน์โหลดหนังสือขอสิทธิ์ฯ เพื่อให้ผู้มีอำนาจของหน่วยงานลงนามในหนังสือขอสิทธิ์ฯ</li>
                            <li className='my-1'>อัปโหลด หนังสือขอสิทธิ์ฯ เพื่อส่งคำขอสิทธิ์ในการใช้งานระบบ</li>
                        </ol>
                    </div>
                        <button className='p-2 w-full bg-indigo-500 border-0 rounded text-white hover:bg-indigo-600'>รับทราบและกรอกข้อมูลหน่วยงาน</button>
                    {/* <a className='w-full' href='http://localhost:3000/testForm/registerForm'>
                    </a> */}
                    <div className='main-point'>
                        <hr className='w-full mt-2'/>
                        <p className='my-1'><span className='text-red-600'>หมายเหตุ 1:</span> กรณีเคยกรอกข้อมูลแล้ว สามารถดาวน์โหลดแบบฟอร์มหนังสือขอสิทธิ์ฯ ได้จากลิงก์ในอีเมลที่ท่านเคยแจ้งไว้</p>
                        <p className='my-1'><span className='text-red-600'>หมายเหตุ 2:</span> ทั้งนี้หากประสงค์เพิ่มเจ้าหน้าที่ เพื่อเข้าใช้งานระบบ <span className='text-red-600 underline'>ในหน่วยงานที่เคยขอสิทธิ์ฯ</span> แล้ว ขอให้แจ้งข้อมูลมาที่ อีเมล : yardna_t@up.ac.th</p>
                    </div>
                </div>
                {/* <button onClick={() => setPopUpShow(true)} className='absolute bottom-4 right-9 p-0 bg-transparent border-0 text-zinc-500'>หมายเหตุ</button> */}
            </div>
            
            {/* <PopUp trigger={popUpShow} setTrigger={setPopUpShow}><h3>My popup</h3></PopUp> */}
            
            <div className='form-container sign-in'>
                <form onSubmit={handleSubmit} noValidate method='post'>
                    <h1 className='text-xl mb-2'>หน่วยงานทั่วไป (ภายนอก มพ.)</h1>
                    <div className={`input-group email-group ${warningEmail ? 'active': 'warningEmail'} my-2`}>
                        <input className={`input input-email`} required type="text"
                            // onChange={(e) => setFormLogin((selectValue) => ({...selectValue, Email: e.target.value}))}
                            ref={email}
                        />
                        <label className='label label-email' htmlFor='email'>กรอกอีเมลผู้ใช้งาน</label>
                        {!warningEmail && <p>* กรุณากรอกอีเมลให้ถูกต้อง</p>}
                    </div>
                    
                    <div className={`input-group password-group ${warningPassword ? 'active': 'warningPassword'} my-2`}>
                        <input className={`input input-password`} required type="password"
                            // onChange={(e) => setFormLogin((selectValue) => ({...selectValue, Password: e.target.value}))}
                            ref={password}
                        />
                        <label className='label label-password' htmlFor='password'>รหัสผ่าน</label>
                        {!warningPassword && <p>* กรุณากรอกรหัสผ่านให้ถูกต้อง</p>}
                    </div>
                    <button className='bt-sign-in w-full p-3 mt-2 bg-indigo-500 border-0 rounded text-white hover:bg-indigo-600'>คลิกเพื่อเข้าสู่ระบบ</button>
                    <div className='up-sign-in'>
                        <hr />
                        <span className='px-1 text-gray-500 text-xs font-bold'>หน่วยงานภายใน : </span>
                        <a href='#link' className='text-xs text-gray-400 hover:text-gray-700'>Login with UP Account</a>
                    </div>
                </form>
            </div>
            
            <div className='toggle-container'>
                <div className={`toggle ${isSignUp ? 'active' : ''}`}>
                    <div className='toggle-pannel toggle-left'>
                        {/* <h1 className='my-2'>กลับไปหน้าเข้าสู่ระบบ</h1> */}
                        <button className='flex content-center bg-transparent border-0' id='login' onClick={handleToggle}><ArrowBackIosIcon sx={{display: 'flex', alignItems: 'center', paddingTop: '2px'}}/><span>กลับไปหน้าเข้าสู่ระบบ</span></button>
                    </div>
                    
                    <div className='toggle-pannel toggle-right'>
                        <h2>ขอสิทธิ์เข้าใช้งานใหม่ (หน่วยงานใหม่)</h2>
                        <span>สำหรับหน่วยงานที่ยังไม่มี อีเมลผู้ใช้งานและรหัสผ่าน</span>
                        <button className='mt-2 hiddens' id='register' onClick={handleToggle}>คลิกเพื่อขอสิทธ์เข้าใช้งาน</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}