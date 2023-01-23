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
