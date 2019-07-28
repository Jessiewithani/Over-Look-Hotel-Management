class RoomService {
    constructor(sampleData) {
        // this.userID = userID;
        // this.date = date;
        // this.food = food;
        // this.totalCost = totalCost;
        this.sampleData = sampleData;
    }
    calculateOrderFeesForSpecifiedDate(id, date) {
        // console.log(this.sampleData)
        let findUserId = this.sampleData.filter(roomService => roomService.userID === id).find(user => {
          return user.date === date
        }).totalCost
        return findUserId;
    }
    calculateTotalRoomServiceFeesForEntireDuration(id) {
        let findEntireTotal = this.sampleData.filter(roomService => {
          return roomService.userID === id
        }).reduce((acc,curr) => {
          acc += curr.totalCost
          return acc;
        },0)
        return Number(findEntireTotal.toFixed(2))
    }
    displayAllOrdersForSpecifiedDate(date) {
      return this.sampleData.filter(service => service.date === date);
    }
    showAllRoomServiceTransactionsForUser(id) {
      return this.sampleData.filter(service => {
        if (service.userID === id) {
          return service;
        }
      })
    }
}

export default RoomService;