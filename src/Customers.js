class Customers {
    constructor(sampleData) {
        this.sampleData = sampleData;
    }
    displayUserInfo(name) {
        let hotelGuest = this.sampleData.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
        return hotelGuest;
    }
    showAllRoomServiceTransactionsForUser(id) {
        return this.sampleData.roomServices.filter(service => {
          if (service.userID === id) {
            return service;
          }
        })
    }
    roomServiceTransactionFeeByDatePerUser(date, id) {
        return this.sampleData.roomServices.reduce((acc, curr) => {
          if (curr.date === date && curr.userID == id) {
            acc += curr.totalCost;
          }
          return acc;
        }, 0);
    }
    calculateTotalRoomServiceFeesForEntireDuration(id) {
        let findEntireTotal = this.sampleData.roomServices.filter(roomService => {
          return roomService.userID === id
        }).reduce((acc,curr) => {
          acc += curr.totalCost
          return acc;
        },0)
        return Number(findEntireTotal.toFixed(2))
    }
    calculateOrderFeesForSpecifiedDate(id, date) {
        // console.log(this.sampleData)
        let findUserId = this.sampleData.roomServices.filter(roomService => roomService.userID === id).find(user => {
          return user.date === date
        }).totalCost
        return findUserId;
    }
    showAllUserBookings(id) {
      return this.sampleData.bookings.filter(booking => {
        if (booking.userID === id) {
          return booking;
        }
      })
  }
  calculateEntireBookingsCost(id) {
    let customerBookings = this.sampleData.bookings.filter(booking => booking.userID === id)
    let final = customerBookings.map(booking => {
      return this.sampleData.rooms.find(room => room.number === booking.roomNumber)
    })
      return final.reduce((acc, curr) => {
        return acc += curr.costPerNight
      },0)
  }
}

export default Customers;