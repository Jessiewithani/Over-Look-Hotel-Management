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
        expect(hotel.availableRooms('2019/09/08')).to.deep.equal([ 
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
    it('should display the current date of today which is being tested on the 29th',function() {
        expect(hotel.displayCurrentDate()).to.equal('07.29.2019')
    });
    it.only('should show the total reveue for given date', function() {
        expect(hotel.totalRevenueForEverythang('2019/07/29')).to.equal(261.55)
    });
    it('should show the new user', function() {
        expect(hotel.createNewUser('Spam', 'Man')).to.deep.equal(
            { id: 12, name: 'Spam Man' }
            )
    })
})