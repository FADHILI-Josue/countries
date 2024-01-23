"use client"
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { useTheme } from 'next-themes';
import Icons from './Icons';

const items: MenuProps['items'] = [
  {
    label: 'System',
    key: 'system',
  },
  {
    label: 'Dark',
    key: 'dark',
  },
  {
    label: 'Light',
    key: 'light',
  },
];

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const onClick: MenuProps['onClick'] = ({key}) => {
    setTheme(key);
  };
  return (
    <>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className='cursor-pointer px-4'>
            {theme && (theme === 'light' ? <Icons.Sun className='mr-2 h-4 w-4' /> : theme === 'dark' ? <Icons.Moon className='mr-2 h-4 w-4'/> : <Icons.Laptop />)}
            {theme}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default ThemeToggle;