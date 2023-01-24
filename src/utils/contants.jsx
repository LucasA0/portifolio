import AnchorLink from "react-anchor-link-smooth-scroll";

export const Link = ({page, selectedPage, setSelectedPage}) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={
				`${selectedPage === lowerCasePage ? "text-yellow" : ""}
					hover: text-yellow transition duration-500
				`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	)
}

export const DotLink = ({selectedPage, setSelectedPage}) => {
	const selectedStyles = `relative bg-yellow before:absolute
	before:w-6 before:h-6 before:rounded-full before:border-2
	before:border-yellow before:left[-50%] before:top-[-50%]`

	return (
		<AnchorLink
			className={
				`${selectedPage === 'home'? selectedStyles : "bg-dark-grey"}
					w-3 h-3 rounded-full
				`}
			href={'#home'}
			onClick={() => setSelectedPage('home')}
		/>

	)
}

export const pages = [
	{
		id: "home",
		value: "Home"
	},
	{
		id: "skills",
		value: "Skills"
	},
	{
		id: "sobre",
		value: "Sobre"
	},
	{
		id: "projetos",
		value: "Projetos"
	},
	{
		id: "contato",
		value: "Contato"
	},
]
