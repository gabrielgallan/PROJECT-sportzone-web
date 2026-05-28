import { Helmet } from 'react-helmet-async'

type PageTitleProps = {
	title?: string
}

export function PageTitle({ title }: PageTitleProps) {
	return (
		<Helmet>
			<title>{title ? `${title} | sportzone` : 'sportzone'}</title>
		</Helmet>
	)
}
