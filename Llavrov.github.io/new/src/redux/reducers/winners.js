const initialState = {
    items: [],
    isLoaded: false,
};

const winners = (state = initialState, action) => {
    if (action.type === 'SET_WINNERS') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }
    return state;
};

export default winners;