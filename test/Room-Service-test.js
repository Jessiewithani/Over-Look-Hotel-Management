const expect = chai.expect;
import chai from 'chai';
import sampleData from '../src/sampleData';
import RoomService from '../src/RoomService';


describe('roomService', function() {
    let roomService;

    beforeEach(function() {
        roomService = new RoomService(sampleData)
    });

    it('should be a function', function() {
        expect(RoomService).to.be.a('function');
      });
    it('should display all room service transactions according to the given date', function() {
        expect(roomService.displayAllOrdersForSpecifiedDate('2019/08/08')).to.deep.equal([ 
          { userID: 87,
            date: '2019/08/08',
            food: 'Refined Plastic Sandwich',
            totalCost: 7.47 } 
        ])
    })
    it('should add an item to the room service record', function() {
        expect(roomService.makeAnOrder(
            { userID: 70,
              date: '2019/09/17',
              food:'Intelligent Rubber Sandwich',
              totalCost :17.18})).to.equal(19)
    })
})