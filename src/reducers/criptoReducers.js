export const criptoReducers = (state = { cryptos: [] }, action) => {
    switch (action.type) {
        case 'ADD_CRIPTO':
            return { 
                ...state, 
                cryptos: [...state.cryptos, action.payload] 
            };
        case 'INIT_CRYPTOS':
            return {
                ...state,
                cryptos: action.payload
            };
        default:
            return state;
    }
}

// Action creators
export const addCripto = (crypto) => ({
    type: 'ADD_CRIPTO',
    payload: crypto
});

export const initCryptos = (cryptos) => ({
    type: 'INIT_CRYPTOS',
    payload: cryptos
});