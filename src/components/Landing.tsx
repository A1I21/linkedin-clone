import { Link } from "react-router-dom";

export function Landing() {
	return (
		<>
		<div>
				<header>
					<div className='logo'>
						<h2>Linked</h2>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
							<path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
						</svg>
					</div>

					<div className='mainmenu'>
						<nav className='main-nav'>
						<Link to="/sign-up"><ul>
								<button className='join'>Join now</button>
							</ul></ Link>
						</nav>

						<div className='menu-container'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-list'
								viewBox='0 0 16 16'
							>
								<path
									fill-rule='evenodd'
									d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
								/>
							</svg>

							<div className='menu-list'>
								<div id='menu-nav'>
									<Link to="/login"><ul>
										<button className='join'>Join now</button>
									</ul></Link>
								</div>
							</div>



						</div>

						<Link to="/login"><div className='maincta'><button className='sign'>Sign in</button></div></Link>
					</div>
				</header>

				<section className='hero'>
					<div className='left-section'>
						<h1>Welcome to your <br /> professional community</h1>
					</div>
					<div className=''>
					<img src='https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg' alt="" />

					</div>
				</section>
			</div>
		</>
	);
}
