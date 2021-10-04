/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

function Traveler(name) {
  // this = {}
  this.name = name
  this.food = 1
  this.isHealthy = true
  // return this
}

Traveler.prototype.hunt = function () {
  this.food += 2
}

Traveler.prototype.eat = function () {
  if (this.food > 0) { // A traveler should only eat food if they have food. 
    this.food -= 1
  } else { // If a traveler tries to eat, but has no food, they are starving.
    this.isHealthy = false
  }
}

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
