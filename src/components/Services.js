import React from 'react';
import Card from './Card';
import data from './Apidata';

function Services() {
  return (
    <div>
       <h1 className="text-center text-info my-3">Our Services</h1>
     <div className="container ">
        <div className="row">
        {data.map((values)=>{
          return(
            <>
            <Card title={values.title}
                  image={values.images} />
            </>
          )
        })}
         
        </div>
      </div>
    </div>
  )
}

export default Services;
