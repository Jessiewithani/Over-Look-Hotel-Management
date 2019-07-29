const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData';
import RoomService from '../src/RoomService';


describe('roomService', function() {
    let roomService;

    beforeEach(function() {
        roomService = new RoomService(sampleData.roomServices, sampleData.bookings)
    });

    it('should be a function', function() {
        expect(RoomService).to.be.a('function');
      });
    it('should give the total cost of service fees with provided date', function() {
        expect(roomService.calculateOrderFeesForSpecifiedDate(70,'2019/09/17')).to.equal(17.18)
    })
    it('should give the total dollar amount of entire duration of service fees', function() {
        expect(roomService.calculateTotalRoomServiceFeesForEntireDuration(70)).to.equal(30.31)
    })
    it('should display all room service transactions according to the given date', function() {
        expect(roomService.displayAllOrdersForSpecifiedDate('2019/08/08')).to.deep.equal([ 
          { userID: 87,
            date: '2019/08/08',
            food: 'Refined Plastic Sandwich',
            totalCost: 7.47 } 
        ])
    })
    it('should return a record of the users room service transactions', function() {
        expect(roomService.showAllRoomServiceTransactionsForUser(70)).to.deep.equal([ { userID: 70,
            date: '2019/10/09',
            food: 'Sleek Rubber Sandwich',
            totalCost: 13.13 },
          { userID: 70,
            date: '2019/09/17',
            food: 'Intelligent Rubber Sandwich',
            totalCost: 17.18 } ])
    });
    it('should return the total room service fees for the given user id, and given date', function() {
        expect(roomService.roomServiceTransactionFeeByDatePerUser('2019/10/18', 55)).to.equal(7.95)
    })
    it.only('should add an item to the room service record', function() {
        expect(roomService.makeAnOrder(
            { userID: 70,
              date: '2019/09/17',
              food:'Intelligent Rubber Sandwich',
              totalCost :17.18})).to.equal(19)
    })
})