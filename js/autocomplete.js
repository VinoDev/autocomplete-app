const matchTextToData = (searchText, data, ObjKeyToMatch) => {
    if(searchText.length === 0 || !data || !ObjKeyToMatch){
        return [];
    }

    const regex = new RegExp(`^${searchText}`, 'gi');

    return data.filter(obj => obj[ObjKeyToMatch].match(regex))
}

export default (searchText, data, ObjKeyToMatch, render) => {
    const matches = matchTextToData(searchText, data, ObjKeyToMatch);
    return render ? render(matches) : matches;
}