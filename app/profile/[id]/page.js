"use client"
import React, { useState } from 'react';
import TotalList from '@/components/TotalList';
import HospitalList from '@/components/HospitalList';
import DoctorList from '@/components/DoctorList';

const ResponsiveComponent = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col h-[95vh] md:w-1/2 p-4">
        {/* Search Bar */}
        <input
          type="text"
          className="w-full rounded-lg px-4 py-2 mb-4"
          placeholder="Search"
        />

        {/* Buttons (Hidden on Medium or larger screens) */}
        <div className="flex mb-4 w-full justify-around md:hidden">
          <button
            className={`py-2 w-1/4 rounded-lg shadow-xl hover:bg-blue-950 ${
              selectedOption === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleOptionChange(1)}
          >
            Full List
          </button>
          <button
            className={`py-2 w-1/4 rounded-lg shadow-xl hover:ease-in-out ${
              selectedOption === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleOptionChange(2)}
          >
            Hospitals
          </button> 
          <button
            className={`py-2  w-1/4 rounded-lg shadow-xl hover:ease-in-out ${
              selectedOption === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleOptionChange(3)}
          >
            Doctors
          </button>
        </div>

        {/* Content based on selected option (Visible on Medium or larger screens) */}
        <div className="md:hidden flex-1 rounded-lg overflow-y-auto scrollbar   scrollbar-thumb-pink-700 scrollbar-track-slate-100 ">
          {selectedOption === 1 && <TotalList />}
          {selectedOption === 2 && <HospitalList />}
          {selectedOption === 3 && <DoctorList />}
        </div>
        <div className=" hidden md:flex md:flex-col rounded-lg">
          <div className='border flex justify-center font-bold text-2xl bg-orange-500 rounded-2xl my-4' >Hospital List</div>
          <div className=' mb-5 border-black overflow-y-auto max-h-[30vh] bg-slate-200 scrollbar scrollbar-thumb-pink-700 scrollbar-track-slate-100 shadow-2xl rounded-xl '><TotalList /></div>
          <div className='border flex justify-center font-bold text-2xl bg-orange-500 rounded-2xl my-4'>Doctor List</div>    
          <div className=' mb-5 border-black overflow-y-auto max-h-[30vh] bg-slate-200 scrollbar scrollbar-thumb-pink-700 scrollbar-track-slate-100 shadow-2xl rounded-xl '><TotalList/></div>
        </div>
      </div>

      {/* Right Section (Medium or larger devices) */}

      <div className="hidden md:flex md:flex-col md:w-1/2 p-4 md:h-[86vh]">
        {/* Content for right div */}
        <div className='border flex justify-center font-bold text-2xl bg-orange-500 rounded-2xl my-4' >Hospital List</div>
          
        <div className=' overflow-y-auto scrollbar scrollbar-thumb-pink-700 scrollbar-track-slate-50 shadow-xl bg-slate-100 rounded-2xl '> <TotalList /></div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
