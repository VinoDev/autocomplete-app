const matchGroup = document.querySelector("#match-group");

export default matches => {
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