import React, { useState } from 'react';


export default function Register_Page (){

    const [user,setuser] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        pass: '',
        re_pass: '',
        nameerr:'',
    })
    
    
    console.log(user.name)

    const userset =(event)=>{
        setuser((user)=>({...user,[event.target.name]:event.target.value}))
    }



    const Submits = (event) =>{
        event.preventDefault();
        

        if (user.name.length < 5) {
            alert('kannan')
            user.nameerr = 'Plese valide user name'
            return;
          }
        else{
            nameerr = 'err'
        }
          
       
        
    }

    return(

        <div className=' bg-hero-pattern text-white flex flex-col pt-[20px] pb-[20px] justify-center items-center'>
           <div className=' border-[2px] bg-transparent backdrop:blur-2xl   border-white p-[50px] rounded-xl gap-[5px] flex flex-col md:w-[80%] lg:w-[50%] justify-center items-center   transition-all duration-100'>
            <h1 className='text-[30px] pb-[20px] font-bold'>REGISTER FORM</h1>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Name</h1> 
                <input type="text" value={user.name} name='name' onChange={userset} placeholder='name' className='p-[5px] pl-[15px] text-black w-[100%] outline-none  border-none rounded-xl' />
                <p className="text-red-500">{user.nameerr}</p>
            </div>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Age</h1>
                <input type="text" name='age' value={user.age} placeholder='age' onChange={userset} className='p-[5px] text-black w-[100%] outline-none  border-none rounded-xl' />
            </div>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Email</h1>
                <input type="text" name='email' value={user.email} placeholder='email' onChange={userset} className='p-[5px] text-black w-[100%] outline-none  border-none rounded-xl' />
            </div>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Phone No</h1>
                <input type="text" name='phone' value={user.phone} placeholder='phone' onChange={userset} className='p-[5px] text-black w-[100%] outline-none  border-none rounded-xl' />
            </div>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Password</h1>
                <input type="text" name='pass' value={user.pass} placeholder='passasword' onChange={userset} className='p-[5px] text-black w-[100%] outline-none  border-none rounded-xl' />
            </div>

            <div className='flex flex-col gap-[8px] w-[100%] justify-center text-[20px]  '>
                <h1 className='font-semibold text-start '>Confirm Password</h1>
                <input type="text" name='re_pass' value={user.re_pass} onChange={userset} placeholder='re-password' className='p-[5px] text-black w-[100%] outline-none  border-none rounded-xl' />
            </div>
            <button type='submit' onClick={Submits} className='hover:bg-[#179517] mt-9 bg-[#2bab2b] w-[80%] p-[10px] rounded-xl font-semibold  '>Submit</button>
           </div>
        </div>

    )

}