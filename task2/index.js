
dateArr = ['2019-05-13 20:30:11', '2017-03-10 19:01:27', '2017-03-11 07:35:55', '2017-03-11 16:15:11', '2017-03-12 08:01:41', '2017-03-12 17:19:08']

// Add new session to dateArr
const addNewSection = () => {
    const restartValue = 1800000 //30 minutes

    setInterval(() => {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        const newDate = year + "/" + month + "/" + day;
        dateArr.push(newDate)
    }, restartValue)
};

// ask for their opinion if is true
const checkDate = (arr) => {
    const dateArray = []
    let d = new Date();
    const todayDate =d.getTime();
    const threeDaysBack = todayDate - 259200000 //3 day on miliseconds

    for(let x = 0; x < arr.length; x++){
        let date = new Date(arr[x]); 
        let milliseconds = date.getTime(); 
        dateArray.push(milliseconds)
    }
    const newDateArray = dateArray.filter(el => el - threeDaysBack > 0)

    if(newDateArray.length >= 6) {
        return true
        //ask for their opinion
    }else {
        return false
        //don't ask for their opinion!!!
    }
}

addNewSection()
checkDate(dateArr)