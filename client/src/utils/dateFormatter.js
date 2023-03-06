const dateFormatter = date =>{
    let d = new Date(date);
    let day = new Intl.DateTimeFormat('en', {day : '2-digit'}).format(d);
    let month = new Intl.DateTimeFormat('en', {month : 'short'}).format(d);
    let year = new Intl.DateTimeFormat('en', {year : 'numeric'}).format(d);

    return `${year}-${month}-${day}`;
}

export default dateFormatter
// const monthFormatter = date =>{
//     let d = new Date(date);
//     let month = new Intl.DateTimeFormat('en', {month : 'short'}).format(d);

//     return `${month}`
// }
// const yearFormatter = date =>{
//     let d = new Date(date);
//     let year = new Intl.DateTimeFormat('en', {year : 'numeric'}).format(d);

//     return `${year}`
// }

// export {dayFormatter, monthFormatter,yearFormatter};