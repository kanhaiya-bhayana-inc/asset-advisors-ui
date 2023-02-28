import React, { useState } from 'react';

export default function (props) {
    const [dispMsg,setDispMsg] = useState(props.dispMsgs);
  const [showErrorsMsg,setShowErrorMsg] = useState(props.showErrorsMsgs);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';
  return (
    <div>
        <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              <strong>Hello user!</strong> {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div> 
           
    </div>
  )
}
