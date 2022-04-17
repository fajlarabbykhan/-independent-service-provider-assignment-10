import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../useData/useData';


const PracticeDetails = () => {
    const practicesDatas = useData('services.json')
    console.log(practicesDatas);
    const { areaId } = useParams()

    return (
        <div>
            <h2>Each details: {areaId}</h2>

        </div>
    );
};

export default PracticeDetails;