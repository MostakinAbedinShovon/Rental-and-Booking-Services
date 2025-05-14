export const getData = () => {
    const TotalAppoinments = JSON.parse(localStorage.getItem('Appoinments'));
    if(TotalAppoinments) return TotalAppoinments;
    else return [];
}

export const setData = (SingleData) => {
    const TotalAppoinments = getData();
    const flag = TotalAppoinments.find((SingleAppoinment) => SingleAppoinment.id === SingleData.id);
    TotalAppoinments.push(SingleData);
    if(!flag) localStorage.setItem('Appoinments',JSON.stringify(TotalAppoinments));
}