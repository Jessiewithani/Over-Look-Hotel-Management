const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData';
import Booking from '../src/Booking';

describe('Booking', function() {
    let booking;

    beforeEach(function() {
        booking = new Booking(sampleData)
    })
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
    it('should show percentage of unoccupied rooms', function() {
        expect(booking.percentageOfRoomsUnAvailable('2019/08/16')).to.equal('3.85')
    })
})