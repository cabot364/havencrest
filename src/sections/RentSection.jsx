// A component that displays the rental information as well as a form to submit a rental request
// Props:
//  - rental: the rental object
//  - onSubmit: a function to handle the form submission
//  - isSubmitting: a boolean to indicate if the form is submitting
//  - error: an error message to display
//  - success: a success message to display

import React from 'react';
import PropTypes from 'prop-types';

const RentSection = ({onSubmit, isSubmitting, error, success }) => {
    return (
        <section>
            <div className="text-center md:text-left flex flex-col md:flex-row justify-between bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent rounded p-5 md:p-10 md:mt-10">
                <div className="md:w-1/2 md:pr-10">
                    <h2 className="text-[rgb(201,170,121)] text-4xl font-bold">Rental Request</h2>
                    <p className="leading-normal text-gray-300 text-xl font-thin mt-5">Interested in renting Havencrest? Fill out the form to request more information. We will be in touch with you promptly.</p>
                    <p className="my-10 md:mb-0 md:mt-10 text-sm text-gray-400">Rent is $4,500/m with 12 and 15 month leases available. Pets allowed with deposit. Utilties not included. Must provide proof of income 3x the asking rent.</p>
                </div>
                <div className="md:w-1/2">
                    <form onSubmit={onSubmit} className="">
                        <div className="flex flex-col space-y-5 mt-5">
                            <input type="text" placeholder="Name"
                                   className="p-3 text-gray-300 bg-[#2B1C22FF] border border-[rgb(201,170,121)]"/>
                            <input type="text" placeholder="Email"
                                   className="p-3 text-gray-300 bg-[#2B1C22FF] border border-[rgb(201,170,121)]"/>
                            <input type="text" placeholder="Phone"
                                   className="p-3 text-gray-300 bg-[#2B1C22FF] border border-[rgb(201,170,121)]"/>
                            <button type="submit"
                                    className="p-3 bg-[rgb(201,170,121)] text-gray-800 font-bold">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default RentSection;
