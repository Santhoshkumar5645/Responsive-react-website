import React from "react";
import Card from "./Card";
import data,{person} from "./Apidata";

function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/img1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1>Bring Your Business Online</h1>
              <p> With IT Company Services</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/img2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1>Custom Software Developement Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex possimus, quae odit rerum magnam vel similique.
                Laudantium, provident dolorum! Qu eum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1>We are here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ex possimus, quae odit rerum magnam vel similique.
                Laudantium, provident dolorum! Qu eum.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* our services  */}

      <h1 className="text-center text-info my-3">Our services</h1>
      <div className="container">
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
   {/* Our team  */}

   <h1 className="text-center text-info my-3">Meet our team</h1>
     <div className="container ">
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

      {/* 3rd section  */}

      <h1 className="text-center text-danger my-4">Questions asked</h1>
      <div className="container mb-3">
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Question 1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed  text-success" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Question 2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed  text-success" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Question 3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default Home;
