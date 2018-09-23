/*
 * @Author: zy9@github.com/zy410419243
 * @Date: 2018-09-23 10:05:00
 * @Last Modified by: zy9
 * @Last Modified time: 2018-09-23 11:11:01
 */
import React, { Component } from 'react';

import ImgDisplay from './imgDisplay';

import { Modal } from 'antd';

import { GetParams, EditParam } from '../../../util/GetParams';

import './css/Wrapper.css';

export default class Wrapper extends Component {
	constructor (props) {
		super(props);

		this.state = {
			visible: false,
			imgDatas: [{ 'src':'https://exhentai.org/t/75/27/75274204315e7a2da724570150a8bfd9d9a3d76b-182052-560-420-jpg_l.jpg', 'href':'https://exhentai.org/g/1290626/f6aa7e991e/' }, { 'src':'https://exhentai.org/t/32/fb/32fb4f59d1470cdfad8e013baaa563cd0f20af33-853189-927-1200-jpg_l.jpg', 'href':'https://exhentai.org/g/1290623/7044c01273/' }, { 'src':'https://exhentai.org/t/1b/0a/1b0aa116964a409bcdc67591dc4013293db02690-349872-850-1200-jpg_l.jpg', 'href':'https://exhentai.org/g/1290624/b4ebeaddd1/' }, { 'src':'https://exhentai.org/t/05/92/05922ea08350167e468559294241194c13ea4bd9-331663-800-2516-jpg_l.jpg', 'href':'https://exhentai.org/g/1290622/d4ca8590e0/' }, { 'src':'https://exhentai.org/t/8d/48/8d48992d61a429216c26658138dfc9741b0e3fb2-576889-942-1050-jpg_l.jpg', 'href':'https://exhentai.org/g/1290618/e3601d5ef9/' }, { 'src':'https://exhentai.org/t/6a/35/6a35191a214b510116d79ec0c65c82b77d662d97-63374-800-600-jpg_l.jpg', 'href':'https://exhentai.org/g/1290057/4845e4218a/' }, { 'src':'https://exhentai.org/t/44/97/449798c95ee8e9663f91e0c635ca2db3e9cf021a-919137-2129-2849-jpg_l.jpg', 'href':'https://exhentai.org/g/1290621/d52e934e8a/' }, { 'src':'https://exhentai.org/t/11/9b/119bd806f8d304fe646123ff6ce3ef8552cb5d6a-3821163-4448-3263-jpg_l.jpg', 'href':'https://exhentai.org/g/1290612/82d5766203/' }, { 'src':'https://exhentai.org/t/53/70/5370f2527786bf5e58800774bd947793faa5ff6c-3513951-2480-3508-jpg_l.jpg', 'href':'https://exhentai.org/g/1290620/0a2356c5d3/' }, { 'src':'https://exhentai.org/t/d5/fc/d5fcfe66de2266daab26f05de6e9781b83f38eb6-5409949-2100-2960-jpg_l.jpg', 'href':'https://exhentai.org/g/1290619/13564f54ea/' }, { 'src':'https://exhentai.org/t/93/72/93727479ebb11f4516dcecb32bfe174ff1bda37a-1576942-2129-2825-jpg_l.jpg', 'href':'https://exhentai.org/g/1290616/af492a27b3/' }, { 'src':'https://exhentai.org/t/49/9e/499ed1997d4740e784e2df6f8efa68d826e87ff7-1437103-1674-2500-jpg_l.jpg', 'href':'https://exhentai.org/g/1290614/5599a992c9/' }, { 'src':'https://exhentai.org/t/57/18/57180e2c9806093a3ad0851fb14571eb0e30d32f-1053247-2123-2831-jpg_l.jpg', 'href':'https://exhentai.org/g/1290615/a0f1b138fa/' }, { 'src':'https://exhentai.org/t/dc/74/dc7494f5b43e6d4294ec9dc4660f126b6b6cea41-1425333-2123-2819-jpg_l.jpg', 'href':'https://exhentai.org/g/1290613/cc492d4062/' }, { 'src':'https://exhentai.org/t/03/96/0396d1bfb448b4801ef129823d0dafee7214e142-1295939-2117-2831-jpg_l.jpg', 'href':'https://exhentai.org/g/1290611/6f5ce11e00/' }, { 'src':'https://exhentai.org/t/6d/5f/6d5f3263a98c441f0955b5c510f882fa9080e546-5026373-4244-2976-jpg_l.jpg', 'href':'https://exhentai.org/g/1290608/1bb90649c1/' }, { 'src':'https://exhentai.org/t/0a/fa/0afa1343d461441a000b428d923dcb5a068e1e27-999903-1392-1974-jpg_l.jpg', 'href':'https://exhentai.org/g/1290607/0847ac02a9/' }, { 'src':'https://exhentai.org/t/87/2a/872a977410f800b54c9f1ed132e40c3510f31819-335121-1059-1500-jpg_l.jpg', 'href':'https://exhentai.org/g/1290588/f532dec6bb/' }, { 'src':'https://exhentai.org/t/44/ac/44ac2e9ddc888069069c36925c5d93604b41b604-904507-2123-2819-jpg_l.jpg', 'href':'https://exhentai.org/g/1290604/c18cab6c92/' }, { 'src':'https://exhentai.org/t/cf/4f/cf4f9f17e80c527b7e032fb149e8f44902db3c5c-498313-717-1012-png_l.jpg', 'href':'https://exhentai.org/g/1290592/843b6de9f9/' }, { 'src':'https://exhentai.org/t/13/4e/134eaa3d7b273cf216391cade4251493a58a0d18-180326-1150-1655-jpg_l.jpg', 'href':'https://exhentai.org/g/1290606/b27a92c5f4/' }, { 'src':'https://exhentai.org/t/d5/fa/d5fa2c6391065f294861ed50413e7b64825334f7-1720830-2149-3036-jpg_l.jpg', 'href':'https://exhentai.org/g/1290603/399e8b95f2/' }, { 'src':'https://exhentai.org/t/cf/77/cf77422ee8eedf41410508d4ec46ee7d3f408342-657775-2123-2831-jpg_l.jpg', 'href':'https://exhentai.org/g/1290601/d0b53dc177/' }, { 'src':'https://exhentai.org/t/06/cd/06cdc850bfbeb946a7b5a4c6d5febe9f68692a2f-4625525-1240-1754-jpg_l.jpg', 'href':'https://exhentai.org/g/1290602/6b95b27c2b/' }, { 'src':'https://exhentai.org/t/98/33/9833155ba96e5c943f88209c538e4b57f24264e7-641460-1400-845-jpg_l.jpg', 'href':'https://exhentai.org/g/1290600/f17f5c06f7/' }],
		};
	}

    listenInject = () => {
    	const ref = document.getElementById('init_window');

    	// 用作接收inject返回的值
    	ref && ref.addEventListener('inject_to_content_script', e => {
    		const { message, error, data } = e.detail;

    		switch (message) {
    			case 'doGetImgInfos': // 加入遮罩层显示图片
    				JSON.parse(GetParams('show') || null) && this.setState({ imgDatas: data });
    				// if (flag) {
    				// 	child = document.createElement('div');
    				// 	child.style.position = 'absolute';
    				// 	child.style.zIndex = 100;
    				// 	child.style.width = '100%';
    				// 	child.style.top = '0px';
    				// 	child.style.left = '0px';
    				// 	child.style.background = '#CADFF2';

    				// 	for (let item of data) {
    				// 		const { src, href } = item;

    				// 		imgHTML += `
    				//             <div style='float: left; width: 20%;'>
    				//                 <img src='${ src}' style='height: 376px; width: 100%; cursor: pointer;' onclick='window.open("${href}?show=false")' />
    				//             </div>
    				//         `;
    				// 	}

    				// 	child.innerHTML = imgHTML + `
    				//         <div style='position: fixed; bottom: 0; left: 0; z-index: 101; height: 100px; background: #F96; opacity: 0.7; cursor: crosshair; width: 100%;'>
    				//             <div style='float: left; width: 50%; height: 100%;' id='toLast'></div>
    				//             <div style='float: left; width: 50%; height: 100%;' id='toNext'></div>
    				//         </div>
    				//     `;

    				// 	document.body.appendChild(child);

    				// 	eventBind(document.getElementById('toLast'), () => {
    				// 		handlePageTurn(-1);
    				// 	});

    				// 	eventBind(document.getElementById('toNext'), () => {
    				// 		handlePageTurn(1);
    				// 	});
    				// }

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
    	this.listenInject();

    	setTimeout(() => {
    		this.setState({ visible: true });
    	}, 500);
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
    			</Modal>
    		</div>
    	);
    }
}