import React from "react";
import { Bio } from './Bio';
import './app.css';
// import { Abilities } from './Abilities';
// import { Formation } from './Formation';
// import { Experience } from './Experience';
// import { References } from './References';
// import { ContactDetails } from './ContactDetails';

class App extends React.Component {
	render() {
		return (
		<div className='App'>
			<Bio />
			{/* <Abilities />
			<Formation />
			<Experience />
			<References />
			<ContactDetails /> */}
		</div>
		)
	}
}

export default App;
