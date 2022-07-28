import { Typography } from "antd"
import { useEffect, useState } from "react"
import { InputResultsCardsContainer, InputResultsCardsImage } from "./styles"

interface RenderListProps {
  mapData: (data: any) => GenericListNode[] | undefined
  getData: () => Promise<any>
  searchInput: string
}

export interface GenericListNode {
  id: string
  name: string
  logoImg?: string
  secondaryImg?: string

}

export const RenderList = ({ mapData, getData, searchInput }: RenderListProps) => {
  const [mappedListData, setMappedListData] = useState<GenericListNode[]>()
  const [filteredListData, setFilteredListData] = useState<GenericListNode[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleGetData = async () => {
    setLoading(true)
    const response = await getData()
    const mappedData = mapData(response?.data)
    if (mappedData) {
      setMappedListData(mappedData)
      setFilteredListData(mappedData)
    }
    if (response.error) setError(error)
    setLoading(false)
  }

  const handleSearch = (input: string) => {
    if (!input.length) setFilteredListData(mappedListData)
    setFilteredListData(mappedListData?.filter(item => item.name.toLowerCase().includes(input.toLowerCase())))
  }

  useEffect(() => {
    handleGetData()
  }, [])

  useEffect(() => {
    // This search input is passed by the grand parent, in this case cause a big prop drilling. 
    // Since it is an isolated component use a state manager will be an overkill.
    // This should be pass by the state manager getting it directly from the store. 
    handleSearch(searchInput)
  }, [searchInput])


  return (<>
    {loading && <div>loading</div>}
    {!!filteredListData && filteredListData?.map((item) => (
      <InputResultsCardsContainer key={item.name + item.id}>
        {item.logoImg && <InputResultsCardsImage src={item.logoImg} alt={`logo-${item.logoImg}`} />}
        <Typography >
          {item.name}
        </Typography>
        {item.secondaryImg && <img src={item.secondaryImg} alt={`secondary-${item.secondaryImg}`} />}
      </InputResultsCardsContainer>
    ))}
    {!!error && <div>{error}</div>}
  </>)
}