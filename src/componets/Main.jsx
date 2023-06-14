import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn  } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="./images/garrobo_port.jpg" alt="/" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>

        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-[#856959]'>Luis E. Nieves</h1>
          <h2 className='flex sm:text-2xl pt-4 text-[#786C56]'>Esta criatura interesante es
            <TypeAnimation
              sequence={[
                'Coder', // Types 'One'
                1000, // Waits 1s
                'Tech', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Tech Enthusiast', // Types 'Three' without deleting 'Two'
                2000,
                () => {
                  console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />

          </h2>
              <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer' size={20} />
                <FaFacebook className='cursor-pointer' size={20} />
                <FaInstagram className='cursor-pointer' size={20} />
                <FaLinkedinIn className='cursor-pointer' size={20} />
              </div>
        </div>
      </div>

    </div>
  )
}

export default Main