import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
        const [services, setServices] = useState([]);
        // Load All Data:
        useEffect(() => {
                fetch('./services.json')
                        .then(res => res.json())
                        .then(data => setServices(data))
        }, [])
        return (
                <div className="container pt-5 pb-5">
                        {
                                services.map(service => <Service
                                        service={service}
                                        key={service.id}
                                ></Service>)
                        }
                </div>
        );
};

export default Services;