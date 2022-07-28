import { Typography } from "antd"
import { useEffect, useState } from "react"
import { InputResultsCardsContainer, InputResultsCardsImage } from "./styles"

interface RenderListProps {
  mapData: (data: any) => GenericListNode[] | undefined
  getData: () => Promise<any>
}

export interface GenericListNode {
  id: string
  name: string
  logoImg?: string
  secondaryImg?: string

}

export const RenderList = ({ mapData, getData }: RenderListProps) => {
  const [mappedListData, setMappedListData] = useState<GenericListNode[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleGetData = async () => {
    setLoading(true)
    const response = await getData()
    console.log('response', response)
    const mappedCollections = mapData(response?.data)
    if (mappedCollections) setMappedListData(mappedCollections)
    if (response.error) setError(error)
    setLoading(false)
  }
  console.log('loading', loading)
  console.log('mappedData', mappedListData)
  useEffect(() => {
    handleGetData()
  }, [])
  return (<>
    {loading && <div>loading</div>}
    {!!mappedListData && mappedListData?.map((item) => (
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