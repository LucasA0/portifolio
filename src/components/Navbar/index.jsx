import React, {useState} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Link, pages } from '../../utils/contants';
import { MenuModal } from '../index'


const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
	const navbarBackground = isTopOfPage ? "" : "bg-red"
	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className="font-playfair text-3xl font-bold">Lucas</h4>

				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-opensans text-m font-semibold'>
						{pages.map(link=> (
							<Link
								key={link.id}
								page={link.value}
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						))}
					</div>
				) : (
					<button
            className="rounded-3xl bg-red p-4"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../../../src/assets/menu-icon.svg" />
          </button>
				)}

				{/* Mobile Menu PopUp */}

				{!isAboveSmallScreens && isMenuToggled && (
					<MenuModal
					isMenuToggled={isMenuToggled}
					setIsMenuToggled={setIsMenuToggled}
					/>
				)}
			</div>
		</nav>
	)
}

export default Navbar
