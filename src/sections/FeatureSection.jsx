import Feature from '../components/Feature';
import React from 'react';
import Feature1 from '../assets/images/kitchen.jpg';
import Feature2 from '../assets/images/bedroom.jpg';
import Feature3 from '../assets/images/view.jpg';


const FeatureSection = () => {
    return (
        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-between">
            <Feature
                image={Feature1}
                title="Open Floorplan"
                description="Some floofy shit about how open floorplans are awesome and the kitchen and living room are huge."
            />
            <Feature
                image={Feature2}
                title="Spacious Bedrooms"
                description="The bedrooms are big and there's tons of room for activities. The closets are also huge."
            />
            <Feature
                image={Feature3}
                title="Gorgeous Views"
                description="Breathtaking views of the Western Maine Mountains, including views of Sugarloaf and Mt Abraham.    "
            />
        </div>
    );
}

export default FeatureSection;