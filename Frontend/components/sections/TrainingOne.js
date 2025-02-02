import React from 'react';
import TrainingSliderOne from '../slider/TrainingSliderOne';
import { useProgramData,  } from '../layout/Fetched_Data/ProgramData';




const TrainingOne = () => {

    const programData = useProgramData();

    console.log('program Data:', programData);

    return (
        <>
            <section className="training-section">
                <div className="bg-layer" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Training &amp; Certification</span>
                        <h2>Get the Immigration <br /> Trainings you Deserve.</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <TrainingSliderOne programData={programData} />
                        </div>
                    </div>
                    <div className="bottom-text">Top Rated By Customers &amp; Immigration Firms With 100% Success Rate.</div>
                </div>
            </section>

        </>
    );
};

export default TrainingOne;