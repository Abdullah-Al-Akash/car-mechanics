import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Booking = () => {
        const { bookingId } = useParams();
        return (
                <div class="text-center">
                        <h3>Hello This is Booking {bookingId}</h3>
                </div>
        );
};

export default Booking;