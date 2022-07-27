
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InputResultsCardsContainer, InputResultsCardsImage, TabsContainer } from './styles'
import mySvg from '../../assets/Icon-Verified.svg'
import { getCollections } from '../../services/get-collections';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface CollectionNode {
  created_at: string
  description: string
  display_name: string
  global_floor_lovelace: number
  global_volume_lovelace_all_time: number
  hero_image: string
  is_minting: boolean
  is_taken_down: boolean
  is_verified: boolean
  jpg_floor_lovelace: number
  jpg_volume_lovelace_24h: number
  likes: number
  nsfw: boolean
  optimized_source: string
  owners: number
  policy_id: string
  reports: number
  source: string
  state_of_project: string
  supply: number
  url: string
  views: number
  _meta: any
}

interface GenericList<T> {
  list: T[];
}

interface TabOptionNode {
  value: string
  id: string
  'aria-controls': string
}

const mapTabOptionsProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabsOptions = [
  { value: "Collections", ...mapTabOptionsProps(0) },
  { value: "Assets", ...mapTabOptionsProps(1) },
  { value: "Users", ...mapTabOptionsProps(2) },
  { value: "Tags", ...mapTabOptionsProps(3) },
]


const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



const InputResultsCards = ({ list }: GenericList<CollectionNode>) => (
  <>
    {list.map((item) => (
      <InputResultsCardsContainer key={item.display_name}>
        <InputResultsCardsImage src={item.hero_image} alt="SVG logo hero" />
        <Typography >
          {item.display_name}
        </Typography>
        <img src={mySvg} alt="SVG logo image" />
      </InputResultsCardsContainer>
    ))}
  </>)

const RenderTabOptions = ({ list }: GenericList<TabOptionNode>) => (
  <>
    {list.map((item) => (
      <Tab label={item.value} {...item} />
    ))}
  </>)


export const TabsResults = () => {
  const [value, setValue] = React.useState(0);
  const [collections, setCollections] = useState()
  const handleGetCollections = async () => {
    const response = await getCollections()
    setCollections(response)
  }
  console.log('collections', collections)
  useEffect(() => {
    handleGetCollections()
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsContainer sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <RenderTabOptions list={tabsOptions} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {collections && <InputResultsCards list={collections} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </TabsContainer>
  );
}
