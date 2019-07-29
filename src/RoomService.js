class RoomServices {
    constructor(sampleData) {
        // this.userID = userID;
        // this.date = date;
        // this.food = food;
        // this.totalCost = totalCost;
        this.sampleData = sampleData;
    }
    displayAllOrdersForSpecifiedDate(date) {
      return this.sampleData.roomServices.filter(service => service.date === date);
    }
    makeAnOrder(order) {
      let newOrder = this.sampleData.roomServices.push(order)
      console.log(this.sampleData.roomServices.length)
      //before pushing the order into the roomService array, the length of the array was 18
      //when you push the new order into the array, it becomes 19
      return newOrder;
    }
}

export default RoomServices;