const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData';
import Booking from '../src/Booking';

describe('Booking', function() {
    let booking;

    beforeEach(function() {
        booking = new Booking(sampleData)
    })
    it('should show a list of ALL user bookings', function() {
        expect(booking.showAllBookings(70)).to.deep.equal([ 
            { userID: 70, date: '2019/10/13', roomNumber: 43 },
            { userID: 70, date: '2019/10/19', roomNumber: 25 },
            { userID: 70, date: '2019/10/06', roomNumber: 17 } 
        ])
    });
    it('should show the total cost of bookings for user', function() {
        expect(booking.calculateEntireBookingsCost(70)).to.equal(1158.63)
    });
    it('should show the most popular booking date', function() {
        expect(booking.showPopularBookingDates()).to.equal('2019/10/10')
    });
})