import React from 'react'
import { Link, pages } from '../../utils/contants'

const MenuItems = ({ selectedPage, setSelectedPage}) => {
	return (
		<div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
			{pages.map(link=> (
				<Link
					key={link.id}
					page={link.value}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			))}
		</div>
	)
}

export default MenuItems
