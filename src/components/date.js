export function getCurrentDate(separator=' '){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
 
    return `${separator}${date}${separator}${month<10?`0${month}`:`${month}`}`
    }