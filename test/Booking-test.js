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
        expect(booking.showAllUserBookings(70)).to.deep.equal([ 
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
    it('should show a filtered list of rooms by type', function() {
        expect(booking.showRoomOptions('junior suite')).to.deep.equal([ 
            { number: 4,
              roomType: 'junior suite',
              bidet: false,
              bedSize: 'full',
              numBeds: 1,
              costPerNight: 177.03 },
           {  number: 5,
              roomType: 'junior suite',
              bidet: false,
              bedSize: 'king',
              numBeds: 2,
              costPerNight: 246.65 },
           {  number: 14,
              roomType: 'junior suite',
              bidet: false,
              bedSize: 'twin',
              numBeds: 2,
              costPerNight: 207.64 },
           {  number: 43,
              roomType: 'junior suite',
              bidet: false,
              bedSize: 'king',
              numBeds: 1,
              costPerNight: 457.17 },
           {  number: 25,
              roomType: 'junior suite',
              bidet: true,
              bedSize: 'queen',
              numBeds: 1,
              costPerNight: 307.49 },
           {  number: 17,
              roomType: 'junior suite',
              bidet: false,
              bedSize: 'king',
              numBeds: 2,
              costPerNight: 393.97 } 
        ])
    })
    it('should show the available dates for booking', function() {
        expect(booking.availableRooms('2019/09/08')).to.deep.equal([ 
            5,
            35,
            41,
            13,
            23,
            26,
            34,
            37,
            36,
            12,
            44,
            34,
            45,
            19,
            13,
            18,
            24,
            9,
            32,
            2,
            43,
            25,
            17,
            25,
            24,
            28 
        ])
    })
})