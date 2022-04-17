import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../useData/useData';


const PracticeDetails = () => {

    const { areaId } = useParams()


    return (
        <div className='text-center m-5'>
            <h2>Practice: {areaId}</h2>
            <p>I failed to show data from fake data . But i tried</p>

        </div>
    );
};

export default PracticeDetails;