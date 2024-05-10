import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const MinNav = () => {
	const navRef2 = useRef();

	return (
		<div className="portal-navigation">
			<ul className="portal-navigation-inner" ref={navRef2}>
				<li className="nav-element">
					<NavLink to="/dashboard" activestyle="true" className="element">
						Dashboard
					</NavLink>

				</li>
				<hr />
				<li className="nav-element">
					<NavLink to="/dashboard/learn" activestyle="true" className="element">
						Knowledge Base
					</NavLink>
				</li>
				<hr />
				<li className="nav-element">
					<NavLink to="/dashboard/help-support" activestyle="true" className="element">
						Help & Support
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default MinNav;
