import React, {Component} from 'react';

import FAQList from './FAQList/FAQList';
import FAQDescription from './FAQDescription/FAQDesciption';

class FAQ extends Component {

	state = {
		currentListIndex: 0,
		list: [
			{
				title: 'this is some list',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea expedita optio repellat repudiandae, sapiente sed sequi vero vitae! Deleniti dolore enim ex id nisi possimus quos voluptates! At, labore?'
			},
			{
				title: 'that i make',
				description: 'Lololololololololdfgjslkdfgkkxvmbmlxkvcb'
			},
			{
				title: 'to test list group',
				description: ' consectetur adipisicing elit. Accusantium ea expedita optio repellat repudiandae, sapiente sed sequi vero vitae! Deleniti dolore enim ex id nisi possimus quos voluptates! At, labore?'
			},
			{
				title: 'asdfsadf',
				description: 'Lorem ipsum dolor sit amet'
			},
			{
				title: 'asdfsadfadsf',
				description: 'niti dolore  labore?'
			},
			{
				title: 'asdfsadfasdfsadxvzxcvfasdf',
				description: 'Some strange data'
			},
		]
	};

	onListClick = (index) => {
		this.setState({
			currentListIndex: index
		})
	};

	render() {
		const titlesArray = this.state.list.map(item => item.title);
		return (
			<div className="container-fluid row">
				<FAQList classes="list-group border-right col-4" list={titlesArray} onListClick={this.onListClick}/>
				<FAQDescription classes="col-6">{this.state.list[this.state.currentListIndex].description}</FAQDescription>
					</div>
					);
	}
}

export default FAQ;