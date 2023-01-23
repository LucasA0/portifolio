import React from 'react'
import {MenuItems} from '../index'

const MenuModal = ({isMenuToggled, setIsMenuToggled, selectedPage, setSelectedPage}) => {
	return (
		<div className='fixed right-0 bottom-0 h-1 bg-blue w-[300px]'>
			{/* Close Icon */}
			<div className='flex justify-end p-12'>
				<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
					<img src='../../../src/assets/close-icon.svg' alt='imagem de um X'/>
				</button>
			</div>
			<MenuItems
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</div>
	)
}

export default MenuModal
