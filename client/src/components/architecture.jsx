import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Architecture() {
  const handleResize = () => {
    // Find the maximum height among all carousel items
    const items = Array.from(document.querySelectorAll('.arch-content'));

    // Temp show objects and reset minHeigt
    items.forEach((item) => { 
      item.style.minHeight = "0px";
      item.parentElement.style.display = "block";
    });

    const maxItemHeight = Math.max(...items.map(item => item.clientHeight));

    // Set the maximum height and re-hide hidden elements
    items.forEach((item) => {
      item.style.minHeight = `${maxItemHeight}px`;
      item.parentElement.style.display = "";
    });
  };

  useEffect(() => {
    // Initial calculation on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
    };
  }, []);

  return (
    <div id="architecture" className="jumbotron">
      <div className="position-relative container my-5">
        <Carousel interval={6000} style={{ height: '100%' }}>
          <Carousel.Item>  
            <div className="p-5 text-center bg-body-tertiary rounded-3 carousel-content arch-content">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="configStore.png"
                    alt="ConfigStore Architecture Diagram"
                    className="img-fluid rounded-3 border border-5 border-primary-subtle"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <h2 className="text-body-emphasis">Architecture</h2>
                  <p className="mx-auto fs-5 text-muted">ConfigStore</p>
                  <hr className="my-3" />
                  <p className="mx-auto fs-5 text-muted">
                    A microservice built to store tenant and solution configuration to be shared
                    accross services and accounts. Built with Terraform infrastructure as code, AWS 
                    DynamoDB, CodePipeline and Lambda with Python.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>  
            <div className="p-5 text-center bg-body-tertiary rounded-3 carousel-content arch-content">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="solutionSetupPipeline.png"
                    alt="Solution Setup Pipeline Architecture Diagram"
                    className="img-fluid rounded-3 border border-5 border-primary-subtle"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <h2 className="text-body-emphasis">Architecture</h2>
                  <p className="mx-auto fs-5 text-muted">Solution Setup Pipeline</p>
                  <hr className="my-3" />
                  <p className="mx-auto fs-5 text-muted">
                    A microservice built to automate the setup of NewRelic monitors, manual test
                    users, environment specific sub domains, and event configuration. Triggered by 
                    a config update event from ConfigStore. Built with Terraform infrastructure as
                    code, AWS serverless and Python.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
