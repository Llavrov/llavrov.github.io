import axios from 'axios';


export const fetchWinners = () => (dispatch) => {
    axios.get('https://llavrov.github.io/achievements.json').then(({ data }) => {
        dispatch(setWinners(data.achievements));
        });
};


export const setWinners = (items) => ({
    type: 'SET_WINNERS',
    payload: items,
});

