/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-23 10:05:00
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 11:43:49
 */
import React, { Component } from 'react';

import ImgDisplay from './imgDisplay';
import PageTurn from './PageTurn';

import { Modal } from 'antd';

import { GetParams } from '../../../util/GetParams';

import './css/Wrapper.css';

const isShow = JSON.parse(GetParams('show') || null);

export default class Wrapper extends Component {
	constructor (props) {
		super(props);

		this.state = {
			visible: false,
			imgDatas: [{ 'src':'https://exhentai.org/t/75/27/75274204315e7a2da724570150a8bfd9d9a3d76b-182052-560-420-jpg_l.jpg', 'href':'https://exhentai.org/g/1290626/f6aa7e991e/' }, { 'src':'https://exhentai.org/t/32/fb/32fb4f59d1470cdfad8e013baaa563cd0f20af33-853189-927-1200-jpg_l.jpg', 'href':'https://exhentai.org/g/1290623/7044c01273/' }, { 'src':'https://exhentai.org/t/cf/77/cf77422ee8eedf41410508d4ec46ee7d3f408342-657775-2123-2831-jpg_l.jpg', 'href':'https://exhentai.org/g/1290601/d0b53dc177/' }, { 'src':'https://exhentai.org/t/06/cd/06cdc850bfbeb946a7b5a4c6d5febe9f68692a2f-4625525-1240-1754-jpg_l.jpg', 'href':'https://exhentai.org/g/1290602/6b95b27c2b/' }, { 'src':'https://exhentai.org/t/98/33/9833155ba96e5c943f88209c538e4b57f24264e7-641460-1400-845-jpg_l.jpg', 'href':'https://exhentai.org/g/1290600/f17f5c06f7/' }],
		};
	}

    listenInject = () => {
    	const ref = document.getElementById('init_window');

    	// 用作接收inject返回的值
    	ref && ref.addEventListener('inject_to_content_script', e => {
    		const { message, error, data } = e.detail;

    		switch (message) {
    			case 'doGetImgInfos': // 加入遮罩层显示图片
    				isShow && this.setState({ imgDatas: data });

    				break;

    			case 'error': // 处理异常
    				console.error(`注入错误：${ error }`);

    				break;

    			default:

    				break;
    		}
    	});
    }

    componentDidMount = () => {
    	if(isShow) {
    		this.listenInject();

    		setTimeout(() => {
    			this.setState({ visible: true });
    		}, 500);
    	}
    }

    render = () => {
    	const { imgDatas, visible } = this.state;

    	const modalProps = {
    		visible,
    		footer: null,
    		title: `当前为第 ${ GetParams('page') || 1 } 页`,
    		style: { top: 0 },
    		onCancel: () => this.setState({ visible: false }),
    		mask: false,
    		width: '100%',
    	};

    	return (
    		<div className='Wrapper'>
    			<Modal { ...modalProps }>
    			    <ImgDisplay dataSource={ imgDatas } />

    				{ visible && <PageTurn /> }
    			</Modal>
    		</div>
    	);
    }
}