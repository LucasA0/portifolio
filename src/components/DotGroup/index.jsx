import React from 'react'
import { DotLink } from '../../utils/contants'

const DotGroup = ({selectedPage, setSelectedPage}) => {
	return (
		<div className='flex flex-col gap-6 fixed top-[60%] right-7'>
			<DotLink />
		</div>
	)
}

export default DotGroup
