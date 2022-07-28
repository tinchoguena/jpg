import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { TabsList } from '../input-tabs/input-tabs'
import { useInputTabs } from '../input-tabs/use-input-tabs'
import { Container } from './styles'

export const InputTabsDropdown = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value)
  const {
    value,
    handleChange,
    tabsPanelsOptions,
    tabsOptions
  } = useInputTabs()
  return (
    <>
      <Container>
        <Input addonAfter={<SearchOutlined />} defaultValue="" onChange={handleSearchInput} />
        <TabsList
          value={value}
          handleChange={handleChange}
          tabsPanelsOptions={tabsPanelsOptions}
          tabsOptions={tabsOptions}
        />
      </Container>
    </>
  )
}