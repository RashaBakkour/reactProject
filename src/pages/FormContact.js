import React from 'react'

const FormContact = () => {
  return (
    <form>
        <div className='form-group mb-4'>
            <input type="text" className="form-control" placeholder="Your Name"  required/>
        </div>
        <div className="form-group mb-4">
            <input type="email" className="form-control"  placeholder="Your Email" required/>
        </div>
        <div className="form-group mb-4">
            <input type="text" className="form-control"  placeholder="Subject" required/>
        </div>
        <div className="form-group mb-4">
            <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className='text-center'>
            <button type='submit'>Send Message</button>
        </div>
    </form>
  )
}

export default FormContact
