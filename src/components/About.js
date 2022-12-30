import React from 'react';
import Card from './Card';
import {person} from './Apidata';

function About() {
  return (
  <>
    <div className="container">
      <div className="row my-4 d-flex align-items-center">
        <div className="col-xs-12 col-md-6">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius amet fugit id architecto officia dolorum eveniet tempora, expedita doloremque distinctio?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id quibusdam reprehenderit similique iusto molestiae nobis aperiam, excepturi cupiditate labore illo nesciunt eaque nulla animi!</p>


        </div>

        <div className="col-xs-12 col-md-6">
        <img className='about_image' src="./images/img10.jpg" alt="" />

     </div>
      </div>
    </div>

    {/* Meet our team  */}
     <h1 className="text-center text-info">Meet our team</h1>
     <div className="container">
        <div className="row">
        {person.map((values)=>{
          return(
            <>
            <Card title={values.title}
                  image={values.images} />
            </>
          )
        })}
         
        </div>
      </div>
  </>
  )
}

export default About
