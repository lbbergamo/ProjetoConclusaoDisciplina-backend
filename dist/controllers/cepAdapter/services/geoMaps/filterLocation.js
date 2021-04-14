"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterLocation = filterLocation;

function filterLocation(response) {
  if (response == null) {
    throw new Error('');
  }

  const {
    results
  } = response;
  return results.map(element => {
    return element.geometry;
  }).map(element => {
    return element.location;
  })[0];
}