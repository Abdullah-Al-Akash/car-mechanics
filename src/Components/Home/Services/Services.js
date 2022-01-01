import React, { useEffect, useState } from 'react';

const Services = () => {
        const [services, setServices] = useState([]);
        // Load All Data:
        useEffect(() => {
                fetch('./services.json')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [])
        return (
                <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                {
                                        services.map(service => console.log(service))
                                }
                        </div>
                </div>
        );
};

export default Services;