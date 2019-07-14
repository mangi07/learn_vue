//import Vue from './vue.esm.browser.min.js';
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
import util from './util.js';


console.log(util)

window.myapp = new Vue({
	el: '#app',
	data: {
		product: util.p,
		image: "../static/pic.jpg"
	}
});

