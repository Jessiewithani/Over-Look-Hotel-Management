const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData';
import RoomService from '../src/RoomService';


describe('roomService', function() {
    let roomService;

    beforeEach(function() {
        roomService = new RoomService(sampleData.roomServices)
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
})