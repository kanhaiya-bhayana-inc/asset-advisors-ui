import React from 'react'

export default function AddInvestment() {
  return (
    <div className='row'>
        <h3 className='text-center p-4'>Add Investment</h3>

        <div className='col-3'>
            <lable>Investment Name</lable>
        <input type="text" name="investmentName" placeholder='Investment name' className='form-control shadow-none my-3' value=""   />
        </div>
        <div className='col-3'>
            <lable>Investment Name</lable>
        <input type="text" name="investmentName" placeholder='Investment name' className='form-control shadow-none my-3' value=""   />
        </div>
        <div className='col-3'>
            <lable>Investment Type Name</lable>
        <input type="text" name="investmentTypeName" placeholder='Investment type name' className='form-control shadow-none my-3' value=""   />
        </div>
    </div>
  )
}
