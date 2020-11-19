// Write your solution in this file!

const driver = {}


function updateDriverWithKeyAndValue(object, key, value) {
    const newDriver = {...object}
    newDriver[key] = value
    return newDriver
}




function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
     object[key] = value
     return object
}

function deleteFromDriverByKey(driver, key) {
    const adamDriver = Object.assign({}, driver);

    delete adamDriver[key]
    return adamDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}