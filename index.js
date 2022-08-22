// Code your solution in this file!76
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier =
  () =>
  (fare, multiplier = fare) =>
    fare * multiplier;
const fareDoubler = (fare) => createFareMultiplier()(fare, 2);
const fareTripler = (fare) => createFareMultiplier()(fare, 3);
const selectDifferentDrivers = function (drivers, par) {
    return par(drivers)
}
