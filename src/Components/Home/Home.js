import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../useData/useData';
import SinglePractices from '../SinglePractices/SinglePractices';

const Home = () => {
    const practicesDatas = useData('services.json')
    // console.log(datas);
    if (practicesDatas.length) {
        practicesDatas.length = 3
    }
    return (
        <div className='container'>
            <h1 className='text-center m-4'>Practice Areas({practicesDatas.length})</h1>
            <div className="row">
                {
                    practicesDatas?.map(practicesData => <SinglePractices key={practicesData.id} practicesData={practicesData}></SinglePractices>)
                }
            </div>
            <div className='text-center'>
                <Link to="/practice-area" className="btn btn-primary ">Load More ...</Link>
            </div>
        </div>
    );
};

export default Home;