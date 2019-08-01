import chai from 'chai';
const expect = chai.expect;
import sampleData from '../src/sampleData';
import Hotel from '../src/Hotel';

describe('hotel', function() {
    let hotel;

    beforeEach(function() {
        hotel = new Hotel(sampleData)
    });

    it('should show the available dates for booking', function() {
        expect(hotel.availableRooms('2019/09/08')).to.deep.equal(27)
    })
    it('should display the current date of today which is being tested on the 29th',function() {
        expect(hotel.displayCurrentDate()).to.equal('07.30.2019')
    });
    it('should show the total reveue for given date', function() {
        expect(hotel.totalRevenueForEverythang('2019/07/29')).to.equal(261.55)
    });
    it('should show the new user', function() {
        expect(hotel.createNewUser('Spam', 'Man')).to.deep.equal(
            { id: 12, name: 'Spam' }
            )
    });
    it('should show room and the information that is available', function() {
        expect(hotel.showAvailableRooms('2019/10/10')).to.deep.equal([ { number: 25,
            roomType: 'junior suite',
            bidet: true,
            bedSize: 'queen',
            numBeds: 1,
            costPerNight: 307.49 } ])
    })
})