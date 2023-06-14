import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto  md:pl-20 p-4 py-16'>
        <h1 className="py-4 text-4xl font-bold text-center text-[#8F7860]">Contact</h1>
        <form action="https://getform.io/f/...." method='POST' encType='multipart/form-data'>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">

                <div className="flex flex-col">
                    <label className='uppercase text-sm py-2' htmlFor="">Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-[#8F8260]' type="text" name='name' />
                </div>
                <div className="flex flex-col">
                    <label className='uppercase text-sm py-2' htmlFor="">Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-[#8F8260]' type="text" name='phone' />
                </div>
                <div className="flex flex-col py-2">
                    <label className='uppercase text-sm py-2'  htmlFor="">Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-[#8F8260]' type="text" name='email' />
                </div>
                <div className="flex flex-col py-2">
                    <label className='uppercase text-sm py-2' htmlFor="">Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-[#8F8260]' type="text" name='subject' />
                </div>
                <div className="flex flex-col py-2">
                    <label className='"uppercase text-sm py-2' htmlFor="">Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-[#8F8260]' rows="10" name='message'></textarea>
                </div>
               
            </div>
            <button className="bg-[#8F7860] text-white mt-4 w-full p-4">Send Message</button>
        </form>
    
    
    </div>
  )
}

export default Contact