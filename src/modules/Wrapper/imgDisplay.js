/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-23 10:12:31
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 11:13:12
 */
import React, { Component } from 'react';

import './css/imgDisplay.css';

export default class imgDisplay extends Component {
	constructor (props) {
		super(props);

		this.state = {

		};
	}

    render = () => {
    	const { dataSource = [] } = this.props;

    	return (
    		<div className='imgDisplay'>
    			{
    				dataSource.map((item, i) => {
    					const { href, src } = item;

    					return (
    						<div key={ `imgWrapper${ i }` } className='img-wrapper'>
    							<img src={ src } onClick={ () => window.open(`${ href }?show=false`) } />
    						</div>
    					);
    				})
    			}
    			<div style={{ clear: 'both' }}></div>
    		</div>
    	);
    }
}