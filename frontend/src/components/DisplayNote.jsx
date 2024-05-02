import React from 'react'




export const DisplayNote = () => {

  const displayhandler=async(e)=>{
  
  }


  return (
    <div>
        <div className="max-w-sm w-96 p-6 mt-14 bg-white border border-gray-200 rounded-lg shadow
       dark:bg-gray-800 dark:border-gray-700">
      
        <div className="mt-3">
                 
              
                </div>
        <div className="mt-4">
                 
                 <input
                   type="text"
                   name="notebody"
                   id="notebody"
                   className="bg-gray-50 border h-24 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Write notes here ...."
                   required=""
                 />
               </div>
               <div>
               {/* <button
                  type="submit"
                  className="w-full text-white bg-primary-600 px-3 py-2 mt-4 rounded-lg focus:ring-4 focus:outline-none
                   dark:bg-green-600 dark:hover:bg-green-700 " 
                 onClick={""}
                >
                 ADD
                </button> */}
               </div>
    
      </div>
    </div>
  )
}
