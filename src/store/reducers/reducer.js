const initialState = {
    searchOngoing: false,
    error: '',
    searchResults: [],
    nextBatchOfResults: null,
}

export default (action, state = initialState) => state
