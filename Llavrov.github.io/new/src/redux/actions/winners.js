import axios from 'axios';


export const fetchWinners = () => (dispatch) => {
    axios.get('http://localhost:3000/achievements.json').then(({ data }) => {
        dispatch(setWinners(data.achievements));
        });
};


export const setWinners = (items) => ({
    type: 'SET_WINNERS',
    payload: items,
});

