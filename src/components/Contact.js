import React from 'react'

function Contact() {
  return (
    <div>
      <h1 className="text-center text-info">Contact us</h1>
      <div className="container">
      <div class="mb-3">
  <label  class="form-label">Name</label>
  <input type="email" class="form-control mb-3 "  placeholder="Enter your name" />
</div>

<div class="mb-3">
  <label  class="form-label">Mobile Number</label>
  <input type="email" class="form-control mb-3 "  placeholder="Enter mobile number" />
</div>

<div class="mb-3">
  <label  class="form-label">Mobile number</label>
  <input type="email" class="form-control mb-3 "  placeholder="Enter mobile number" />
</div>

<div class="mb-3">
  <label  class="form-label">Example textarea</label>
  <textarea class="form-control mb-3 "  rows="3"></textarea>
</div>

<button className="btn btn-primary mb-3">Submit Feedback</button>
      </div>
    </div>
  )
}

export default Contact
