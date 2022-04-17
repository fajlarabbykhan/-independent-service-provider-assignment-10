import React, { useEffect, useState } from 'react';

const useData = (url) => {
    const [practices, setPractices] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPractices(data))

    }, [])
    return practices;

};

export default useData;