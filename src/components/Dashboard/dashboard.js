import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import {
// 	UilBars,
// 	UilUsersAlt,
// 	UilHome,
// 	UilCreateDashboard,
// 	UilPagelines,
// 	UilShop,
// 	UilShieldCheck,
// 	UilLanguage,
// 	UilBookOpen,
// 	UilBug,
// 	UilHeadphones,
// } from '@iconscout/react-unicons';
import DashboarbHome from './dashboarbpages/dHome';
import Logo from '../../assets/logos_Icon/nicetyfarmW.png';

/* eslint no-mixed-spaces-and-tabs: "error" */
function Dashboard() {
	const isOpen = useState(false);
	// const profileToggle = () => {
	// 	setIsOpen(!isOpen);
	// };
	return (
		<div className="mx-auto bg-grey-400">
			{/* Screen */}
			<div className="min-h-screen flex flex-col bg-gray-100">
				{/* Header Section Starts Here */}
				<header className="bg-nav bg-green-600">
					<div className="flex justify-between">
						<div className="p-1 mx-3 inline-flex">
							<h1 className="w-12 lg:w-16">
								<img src={Logo} alt="Drone" />
							</h1>
							{/* <UilBars onClick="sidebarToggle()" className="pl-24" /> */}
						</div>
						<div className="p-1 flex flex-row">
							<img
								// onClick={profileToggle}
								className="inline-block h-8 w-8 rounded-full"
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAAD8/Pz5+fn19fXs7Oy1tbV8fHzZ2dnR0dHw8PClpaVwcHBMTEzBwcGbm5uurq52dnbm5uY+Pj4sLCwMDAxXV1eLi4tEREQzMzNpaWlSUlKCgoLLy8sjIyMcHBwWFhZfX1+LyujtAAAEGUlEQVR4nO2a2baiMBBFiTILQSZBxYH//8lGUVsUSFXgYD/0ebyXBdukUpUaDGOqXHPyKybKtnf+Dz+/NowqK4X9M4CTY5rFUQiRrn5EYAsnkWXWIIjgJwBu3Xy6DEUrZ3mTNAvR1V4uvBmns/hSWHgLEkTfAHdlUbIMwKoaIGh0KawlEA7DBDeI7a8JGh3Rp+PzKPQoxFqEVBM0DEiD8DMKgtgBEUYOQ0cRjMAiEggBM8khn7TgMuzJCCFoGej7IISLQTgxEEBOcstAcDAIdGtsjOH3CCUGgRAf0Aj/wCpwzBGEQAqTDx0xCC4DIcYgcLwjKEisGAgnEAI9TOWoy5vy6voS7A5LdwwViMCiI2wwBGao/vRLmGCdXBkImGCdXBgIBQTBTxkIGGNY1QwEkGtyGAgg18SIlMc1BsGnI4Bur4ZRkxFgdSerp8zVK8yRvGtDRMARUA0yBSK4NAcJ3AfDoEUqiUQgZTMptEFBukTDnMJda8pOgGoLTxEyqgOWwDDUCPCKvNI7IYuOrVaq6ifYEm5SeEhc1fNNozeXHeii0JU/ltctsA03JcMEi/WnBs1hgZbMUwMOCpTG9cvuI1isd912At2v7C67W6INSiDeJR8bbn0UG6p7hF5nJfxUNjuwf5Qv5N8EL68fh7Fx3yW2VZkcOlZ3cu7bUW+e3uBejcqBNmE9W1Pvf+xUdOL2/2dQE90tXlnEUBzwXjuTAtrXbicy9L/fLN+fOdhzlrzWm87Lm6y1d6G/4lc80wn1ZU+try9T6HOZ5+3k82HKuD8ufqcKXu9zIismWcU6Go7Ln1F5uBJ1LfSNYvSamHf32cvHHtaMX9Zu7KWiG5V6w9abUh3DJGSwztPUklj5rIjY3orW/qiktbYkrQwWcxlogwos1TwCajmFJZZRcvovDP18EVg3O+LICls13SI5DUmW6L66RiGQE05W44El8kgBpzfNFDXhO+IQiDth4gjEnoaginqTRDsT1CkyLdGcNKcLxhZpXpnRe9ERJeWEucZWlGPJmdvREOVYBlgEQnmY1RzX0F6d24yU0+aRuizIGdvRkroqB4xRrdTjRoSUYJrUc1/AMNkqU3auoO75plxlj6M17nmkSi/d0Qx5FqmOBGfEVlMqFw29r7RSxWu4W1D3z8Bx8qZMgUCfpNOXAkFV3VkAAe6Z1Ah4t6BEWIDgPwIFAR+llH6BM0qnKdWgODiRuUl5ja/hCMp8yoo5I64aovS1k4g6TaehC7XUQ6xssxVwWpiroY6Qti7Blt1L9r3iONOW5GkgdftkiSymL8Zu607tpbtbRzeGl85mrumWle9uq0PICOXnYxB55uy9azPx7CgI9+cRlPy8Dw+RdBPsHIPletKOqrhOr/lN1+azu6AqNrb0XIv7y/8AuSw63/Qh3M8AAAAASUVORK5CYII="
								alt="logo"
							/>
							<NavLink
								to="/dashboard/profile"
								className="text-white p-2 no-underline hidden md:block lg:block"
							>
								User name
							</NavLink>
							{isOpen && (
								<div
									id="ProfileDropDown"
									className="rounded shadow-md bg-white absolute pin-t mt-12 mr-8"
								>
									<ul className="list-reset ">
										<li>
											<NavLink
												to="/dashboard/profile"
												className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
											>
												My Profile
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/"
												className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
											>
												Notifications
											</NavLink>
										</li>
										<li>
											<hr className="border-t mx-2 border-grey-ligght" />
										</li>
										<li>
											<NavLink
												to="/"
												className="no-underline px-4 py-2 block text-black hover:bg-grey-light"
											>
												Logout
											</NavLink>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</header>
				{/* /Header */}
				<div className="flex flex-1">
					{/* Sidebar */}
					<aside
						id="sidebar"
						className="w-1/2 md:w-1/6 lg:w-1/6 border-r hidden md:block lg:block"
					>
						<ul className="list-reset flex flex-col ml-4">
							<li className=" w-full h-full py-3 px-2 border-b border-light-border">
								<NavLink to="/home" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilHome className="float-left mx-2" /> */}
										Home
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-light-border">
								<NavLink to="/" activestyle="true" />
								<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
									{/* <UilCreateDashboard className=" float-left mx-2" /> */}
									Dashboard
								</span>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-light-border">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilPagelines className="float-left mx-2" /> */}
										Crop Management
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-light-border">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										<i className="fas fa-table float-left mx-2" />
										Animal Management
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-light-border">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilBug className="float-left mx-2" /> */}
										pest and Disease Control
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-300-border">
								<NavLink to="/dashboard/Inmarket" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilShop className="float-left mx-2" /> */}
										Market Place
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-300-border">
								<NavLink to="/" activestyle="true">
									<spaspan className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilShieldCheck className="float-left mx-2" /> */}
										Security
									</spaspan>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-300-border">
								<NavLink to="/" activestyle="true">
									<spaspan className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilBookOpen className="float-left mx-2" /> */}
										Knowlwdge Base
									</spaspan>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-300-border">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilUsersAlt className="float-left mx-2" /> */}
										Comunity
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2 border-b border-300-border">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilHeadphones className="float-left mx-2" /> */}
										Help & Support
									</span>
								</NavLink>
							</li>
							<li className="w-full h-full py-3 px-2">
								<NavLink to="/" activestyle="true">
									<span className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
										{/* <UilLanguage className="float-left mx-2" /> */}
										Languages
										<span>
											<i className="fa fa-angle-down float-right" />
										</span>
									</span>
								</NavLink>
							</li>
						</ul>
					</aside>
					{/* /Sidebar */}
					<DashboarbHome />
				</div>
				{/* Footer */}
				<footer className="bg-grey-darkest text-white p-2">
					<div className="flex flex-1 mx-auto">&copy; NicetyFarm</div>
				</footer>
				{/* /footer */}
			</div>
			<Outlet />
		</div>
	);
}

export default Dashboard;
