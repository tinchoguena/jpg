import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import { TabsResults } from '../input-tabs/input-tabs'
import { Container } from './styles'

export const InputTabsDropdown = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value)

  return (
    <>
      <Container>
        <Input addonAfter={<SearchOutlined />} defaultValue="" onChange={handleSearchInput} />
        <TabsResults />
      </Container>
    </>
  )
}