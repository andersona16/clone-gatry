import React from 'React';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';
import PagesPromotionForm from './Promotion/Form/Form';


const Root = () => {
    return(
        <Router>
            <Switch>
            <Router path="/create" component={PagesPromotionForm}/>
            <Router path="/edit/:id" component={PagesPromotionForm}/>
            <Router path="/" component={PagesPromotionSearch}/>
            </Switch>
        </Router>
    );
}


export default Root;