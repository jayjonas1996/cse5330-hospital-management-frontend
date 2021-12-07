module.exports = {
    convertToLocalTimeZone(date) {
        return date.split('T')[0] + ' ' + new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    },
    convertToTableData(data) {
        let headers = []
        let rows = []
        data['metaData'].forEach((column) => {
            headers.push(column['name'])
        });

        for (var i=0; i<data['rows'].length; i++) {
            let row = [];
            for (var j=0; j<headers.length; j++) {
                row.push(data['rows'][i][headers[j]])
            }
            rows.push(row);
        }
        let finalData = [headers].concat(rows)
        return finalData;
    }
//     loggedInUser() {
//         return new E
//     }
}
