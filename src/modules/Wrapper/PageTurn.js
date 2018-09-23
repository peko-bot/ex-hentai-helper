/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-23 11:24:56
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 11:33:41
 */
import React, { Component } from 'react';

import { GetParams, EditParam } from '../../../util/GetParams';

import './css/PageTurn.css';

export default class PageTurn extends Component {
    handlePageTurn = pageType => {
    	const page = parseInt(GetParams('page')) || 0;

    	window.location.href = EditParam(window.location.href, 'page', pageType + page);
    };

    render = () => {
    	return (
    		<div className='PageTurn'>
    			<div className='turn-wrapper'>
    				<div className='turn-button' onClick={ e => this.handlePageTurn(-1) }></div>
    				<div className='turn-button' onClick={ e => this.handlePageTurn(1) }></div>
    			</div>
    		</div>
    	);
    }
}