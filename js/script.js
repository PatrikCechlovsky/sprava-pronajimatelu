
function showForm(type) {
    let formHtml = '';
    switch(type) {
        case 'osoba':
            formHtml = '<h2>Formulář: Osoba</h2><label>Jméno: <input type="text"></label><br><label>Příjmení: <input type="text"></label>';
            break;
        case 'osvc':
            formHtml = '<h2>Formulář: OSVČ</h2><label>Jméno: <input type="text"></label><br><label>IČ: <input type="text"></label>';
            break;
        case 'firma':
            formHtml = '<h2>Formulář: Firma</h2><label>Název firmy: <input type="text"></label><br><label>IČ: <input type="text"></label>';
            break;
        case 'spolek':
            formHtml = '<h2>Formulář: Spolek / Skupina</h2><label>Název spolku: <input type="text"></label><br><label>IČ: <input type="text"></label>';
            break;
    }
    document.getElementById('form-container').innerHTML = formHtml;
}
