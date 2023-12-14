import React from 'react'
import './inquiryForm.scss'
import profile5 from '../../component/assets/profile-5.jpg';

export default function InquiryForm() {
  return (
    <div className='boxOne inquiryForm '>
      <div className="inner">
        <div class="widget-content">
          <div class="align">
            <div class="agent-img pb-3">
              <img src={profile5} class="img-thumbnail " style={{borderRadius:'50%'}} alt="image"/>
            </div>
            <h5 className='mb-0'>Hermann P. Schnitzel</h5>
            <p className='sub-heading mt-0'>Agent of Property</p>
            <h6>(+1) 774-238-0096</h6>
          </div>
          <form action="index.html">
            <h6 class="align light-gray mt-1 mb-1">Request Inquiry</h6>
            <div class="form-group">
              <input type="text" placeholder="Full Name *" class="form-control mt-1 bg-white text-muted"/>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email ID *" class="form-control mt-1 bg-white text-muted"/>
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Phone No *" class="form-control mt-1 bg-white text-muted"/>
            </div>
            <div class="form-group">
              <textarea rows="3" placeholder="Message *" class="form-control mt-1 bg-white text-muted"></textarea>
            </div>
            <div class="form-group mb-0">
              <button type="submit" class="btn">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
