import axios from 'axios'

const baseUrl = 'https://swapi.dev/api'

export const searchForCharacter = async (searchTerm, nextBatch) => {
    //nextBatch, is a new url endpoint if there is more then one page of results
    try {
        const response = await axios.get(
            nextBatch
                ? nextBatch
                : `${baseUrl}/people/?search=${encodeURI(searchTerm)}`
        )
        const { results, next } = response.data
        return {
            charactersResult: results,
            nextBatch: next,
        }
    } catch {
        throw new Error(`The search party encountered some issues!`)
    }
}
