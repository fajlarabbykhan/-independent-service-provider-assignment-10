import React from 'react';
import useData from '../../useData/useData';
import SinglePractices from '../SinglePractices/SinglePractices';

const PracticeArea = () => {
    const practicesDatas = useData('services.json')
    // console.log(practicesDatas);
    return (
        <div className='row m-4 '>
            {
                practicesDatas?.map(practicesData => <SinglePractices key={practicesData.id} practicesData={practicesData}></SinglePractices>)
            }
        </div>
    );
};

export default PracticeArea;