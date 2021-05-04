const URL_API = 'https://rickandmortyapi.com/api/'
const OPTIONS = { crossDomain : true }

function getCharacterById(id) {
    const URL = `${URL_API}character/${id}`

    $
        .get(URL, OPTIONS, (data) => console.log(data))
        .fail(() => console.error(new Error, id))
} 

getCharacterById(2)