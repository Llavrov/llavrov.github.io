import React from 'react'
import './scss/add.scss';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {Header} from './components';
import { Route } from 'react-router';

function MainPizza() {
    const [schools, setSchools] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/school.json').then((resp) => resp.json()).then(json => {
            setSchools(json.school);
        });
    }, []);
    // console.log(schools, '---');

    return (
        <div className="main">
            <Header onClickItem={(name) => console.log(name)} headitems= {[
                    "Достижения",
                    "Школа",
                    "Выпускники",
                    "Лекции",
                ]} />
            <Route path='/' render={() => <Home schools={schools}/>} exact/>
            <Route path='/Card' component={Cart} exact> 
            </Route>
        </div>
    );
}

export default MainPizza;
