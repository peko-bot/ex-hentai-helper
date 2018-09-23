/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-06-12 09:43:22
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 10:04:47
 */
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Wrapper from '../modules/Wrapper';

// import Bundle from '../../util/Bundle';

// const Popup = props => (
// 	<Bundle load={ () => import('../modules/Popup') }>
// 		{ Popup => <Popup {...props}/> }
// 	</Bundle>
// );

// const Option = props => (
// 	<Bundle load={ () => import('../modules/Option') }>
// 		{ Option => <Option {...props}/> }
// 	</Bundle>
// );

export default class Router extends Component {
    render = () => {
    	return (
    		<HashRouter>
    			<div>
    				<Route path='/' exact component={ Wrapper } />
    			</div>
    		</HashRouter>
    	);
    }
}