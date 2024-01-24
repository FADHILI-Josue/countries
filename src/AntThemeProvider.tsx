"use client"
import { FC, ReactNode } from 'react'
import { ConfigProvider, ThemeConfig } from 'antd';
import { useTheme } from 'next-themes';

interface AntThemeProviderProps {
  children: ReactNode
}

const darkTheme:ThemeConfig = {
  token: {
    colorPrimary: 'blue',
    colorBgBase: '#1F2937',
    colorText: 'white',
    colorTextPlaceholder: '#e8ede9',
  },
  components: {
    Select: {
      colorBorder: 'white'
    },
    Input: {
      colorBorder: 'white'
    }
  }
}
const defaultTheme:ThemeConfig = {}

const AntThemeProvider: FC<AntThemeProviderProps> = ({children}) => {
    const { theme } = useTheme();
  return <ConfigProvider theme={['dark', 'system'].includes(theme as string) ? darkTheme : {token: {
    colorPrimary: 'blue'
  }}}>
    {children}
</ConfigProvider>
}

export default AntThemeProvider