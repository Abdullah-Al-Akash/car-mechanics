import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Service.css';

const Service = (props) => {
        const { id, name, img, fee, description } = props.service;

        const history = useHistory();
        const handleBooking = () => {
                history.push(`/booking/${id}`);
        }
        return (
                <div class="card mb-3 mx-auto border-dark border-3" style={{ "max-width": "1000px" }}>
                        <div class="row g-0">
                                <div class="col-md-4">
                                        <img src={img} class="img-fluid service-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                        <div className="p-4">
                                                <h3 class="">{name}</h3>
                                                <p class="">{description.slice(0, 200)}</p>
                                                <div className="d-flex justify-content-between pt-4">
                                                        <h4>Service Fee: <span className="text-success fw-bold">${fee}</span> </h4>
                                                        <button onClick={handleBooking} className="btn btn-success fw-bold">Booking Now</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Service;