const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData'
import Customer from '../src/Customers';

describe('Customer', function() {
    let customer;

    beforeEach(function() {
        customer = new Customer(sampleData)
    })
    it('should display the user information', function() {
        expect(customer.displayUserInfo('Winnifred Kris')).to.deep.equal([ { id: 6, name: 'Winnifred Kris' } ])
    });
    it('should return a record of the users room service transactions', function() {
        expect(customer.showAllRoomServiceTransactionsForUser(70)).to.deep.equal([ { userID: 70,
            date: '2019/10/09',
            food: 'Sleek Rubber Sandwich',
            totalCost: 13.13 },
          { userID: 70,
            date: '2019/09/17',
            food: 'Intelligent Rubber Sandwich',
            totalCost: 17.18 } ])
    });
    it('should return the total room service fees for the given user id, and given date', function() {
        expect(customer.roomServiceTransactionFeeByDatePerUser('2019/10/18', 55)).to.equal(7.95)
    });
    it('should give the total dollar amount of entire duration of service fees', function() {
        expect(customer.calculateTotalRoomServiceFeesForEntireDuration(70)).to.equal(30.31)
    });
    it('should give the total cost of service fees with provided date', function() {
        expect(customer.calculateOrderFeesForSpecifiedDate(70,'2019/09/17')).to.equal(17.18)
    });
    it('should show a list of ALL user bookings', function() {
        expect(customer.showAllUserBookings(70)).to.deep.equal([ 
            { userID: 70, date: '2019/10/13', roomNumber: 43 },
            { userID: 70, date: '2019/10/19', roomNumber: 25 },
            { userID: 70, date: '2019/10/06', roomNumber: 17 } 
        ])
    });
    it('should show the total cost of bookings for user', function() {
        expect(customer.calculateEntireBookingsCost(70)).to.equal(1158.63)
    });
    it('should show all bookings of user with given name', function() {
        expect(customer.showAllUserBookingsByName('Brook Christiansen')).to.deep.equal([ { name: 'Brook Christiansen', date: '2019/10/19', room: 5 } ])
    })
})