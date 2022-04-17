import React from 'react';
import { Link } from 'react-router-dom';

const SinglePractices = ({ practicesData }) => {
    const { name, img, id } = practicesData || {}
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded text-center">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/practice-area/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePractices;