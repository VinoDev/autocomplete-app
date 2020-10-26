const matchTextToData = (searchText, dataArr, ObjKeyToMatch) => {
    if(searchText.length === 0 || !dataArr || !ObjKeyToMatch){
        return [];
    }

    const regex = new RegExp(`^${searchText}`, 'gi');

    return dataArr.filter(obj => obj[ObjKeyToMatch].match(regex))
}

export default (searchText, dataArr, ObjKeyToMatch, render) => {
    const matches = matchTextToData(searchText, dataArr, ObjKeyToMatch);
    return render ? render(matches) : matches;
}