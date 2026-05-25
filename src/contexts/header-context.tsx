import { createContext, useState, type ReactNode } from 'react'

interface HeaderContextType {
	pageTitle: string | null
	onPageChange: (title: string) => void
}

export const HeaderContext = createContext({} as HeaderContextType)

interface HeaderContextProviderProps {
	children: ReactNode
}

export function HeaderContextProvider({ children }: HeaderContextProviderProps) {
	const [pageTitle, setPageTitle] = useState<string | null>(null)

	function handleOnPageChange(title: string) {
		setPageTitle(title)
	}

	return (
		<HeaderContext.Provider
			value={{
				pageTitle,
				onPageChange: handleOnPageChange,
			}}
		>
			{children}
		</HeaderContext.Provider>
	)
}
