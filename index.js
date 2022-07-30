function superbowlWin(record){
    const name = record.find(function (recordObj){
        return recordObj.result === "W"
    })
    return name === undefined ? name : name.year
}
