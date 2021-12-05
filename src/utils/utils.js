module.exports = {
    convertToLocalTimeZone(date) {
        return date.split('T')[0] + ' ' + new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    },
//     loggedInUser() {
//         return new E
//     }
}
