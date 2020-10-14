const matchGroup = document.querySelector("#match-group");

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match=>`
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr})
                    <span class="text-primary">${match.capital}</span>
                </h4>
            </div> 
        `).join("");

        return matchGroup.innerHTML = html;
    } else {
        return matchGroup.innerHTML = "";
    }
}

const matchTextToData = (searchText, data) => {
    if(searchText.length === 0 || !data){
        return [];
    }

    const regex = new RegExp(`^${searchText}`, 'gi');

    return data.filter(state => state.name.match(regex) || state.abbr.match(regex))
}

export default (searchText, data) => {
    const matches = matchTextToData(searchText, data);
    return outputHtml(matches);
}