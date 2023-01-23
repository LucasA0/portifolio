import React, {useState} from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Link, pages } from '../../utils/contants';
import { MenuModal } from '../index'


const Navbar = ({selectedPage, setSelectedPage}) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

	return (
		<nav className={`z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				<h4 className="font-playfair text-3xl font-bold">Lucas</h4>

				{/* DESKTOP NAV */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
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
						className='rounded-full bg-red p-2'
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<img src="../../../src/assets/menu-icon.svg" alt="icone de menu" />
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
