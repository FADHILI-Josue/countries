"use client"
import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'
import AntThemeProvider from './AntThemeProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'

interface ProvidersProps {
    children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <ThemeProvider enableSystem attribute="class" defaultTheme='system'>
        <Provider store={store}>
            <AntThemeProvider>
                {children}
            </AntThemeProvider>
        </Provider>
    </ThemeProvider>
}

export default Providers