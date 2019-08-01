class Hotels {
    constructor(sampleData) {
        this.sampleData = sampleData;
    }
    availableRooms(date) {
        let availableOptions =  this.sampleData.bookings.filter(booking => {
          console.log('booking', booking)
          //since our date is already being booked, we need to return all dates BUT that date. (hence the bang operator)
          if (booking.date !== date) {
            return booking.roomNumber
          }
        })
        console.log('available options',availableOptions)
        //to show only the room number map through the array and access the room number.
        //to show how many rooms are available, add the length method
        let roomNumber = availableOptions.map(booking => booking.roomNumber)
        return roomNumber.length
    }
    displayCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() +1; //January is 0.
        var yyyy = today.getFullYear();
        if(dd < 10) {
          dd = '0' + dd
        }
        if(mm < 10) {
          mm = '0' + mm
        }
        return mm + '.' + dd + '.' + yyyy;
    }
    totalRevenueForEverythang(date) {
      //1.first filter through booking to find the date
      //2. return the room number
      //3. access the actual room number
      //4. reduce through rooms to get the total cost
      //5. add up room service cost that matches the date
      let findBookingDate = this.sampleData.bookings.filter(booking => booking.date === date).map(element => element.roomNumber)
      // return findBookingDate
      let totalMoniesForRoom = this.sampleData.rooms.reduce((acc, room) => {
        if(findBookingDate.includes(room.number)){
          acc += room.costPerNight
        }
        return acc;
      }, 0)
    
      let roomServiceTabByDate = this.sampleData.roomService.reduce((acc, service) => {
        if(service.date === date) {
          acc += service.totalCost
        }
        return acc;
      },0)
      return (roomServiceTabByDate + totalMoniesForRoom)
    }
    createNewUser(newGuestName) {
      this.sampleData.users.push({
          id: 1 + this.sampleData.users.length,
          name: newGuestName,
        })
        return this.sampleData.users[this.sampleData.users.length - 1];
    }
    showAvailableRooms(date) {
      let todaysBookings = this.sampleData.bookings.filter(booking => {
        if(booking.date === date) {
          return booking.roomNumber
        }
      }).map(room => room.roomNumber)
  
    return this.sampleData.rooms.reduce((acc, room) => {
      todaysBookings.forEach(booking => {
        if(room.number === booking) {
          acc.push(room)
        }
      })
      return acc
    },[])
    }
    
}

export default Hotels;