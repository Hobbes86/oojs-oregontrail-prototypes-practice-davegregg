/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

class Traveler {
  constructor (name) {
    // this = {}
    this.name = name
    this.food = 1
    this.isHealthy = true
    // return this
  }

  hunt () {
    this.food += 2
  }

  eat () {
    if (this.food > 0) { // A traveler should only eat food if they have food. 
      this.food -= 1
    } else { // If a traveler tries to eat, but has no food, they are starving.
      this.isHealthy = false
    }
  }
}

// "Inheritance": Our TeenTraveler inherits from Traveler. It gets all the features of a Traveler, and has the option to add extra behavior, change how existing methods are done, or override the starting values in the constructor.
// TeenTraveler is a subclass. Traveler is the superclass.
// TeenTraveler is a child class. Traveler is the parent class.
class TeenTraveler extends Traveler {
  constructor (name) {
    super(name)

    this.food = 2
  }

  eat () {
    if (this.food > 0) {
      this.food -= 2 // A teen eats more than a normal traveler.
    } else {
      this.isHealthy = false
    }
  }

  complain () {
    if (this.food === 1) {
      console.warn("Man, I don't have enough to satisfy me!")
    }
  }
}

const adrianTraveler = new TeenTraveler("Adrian")








function Wagon(capacity) {
  this.capacity = capacity
  this.passengers = []
}

Wagon.prototype.getAvailableSeatCount = function () {
  return this.capacity - this.passengers.length
}

Wagon.prototype.join = function (traveler) {
  if (this.getAvailableSeatCount() > 0) {
    this.passengers.push(traveler)
  }
}

Wagon.prototype.shouldQuarantine = function () {
  return this.passengers.some(person => !person.isHealthy)
}

Wagon.prototype.totalFood = function () {
  return this.passengers.reduce((sum, traveler) => sum + traveler.food, 0)
}
