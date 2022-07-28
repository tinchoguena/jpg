import { useEffect, useState } from "react";
import mySvg from '../../assets/Icon-Verified.svg'
import { getCollections } from '../../services/get-collections';
import { RenderList } from '../common/render-list';
import { getAssets } from '../../services/get-assets-mocked';
import { getUsers } from '../../services/get-users-mocked';
import { getTags } from "../../services/get-tags-mocked";

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

interface assetNode {
  name: string
  id: string
}


export const useInputTabs = () => {
  const [value, setValue] = useState(0);


  const mapColletionsDataToListFormat = (data: CollectionNode[] | undefined) => data?.map(collection => (
    {
      id: collection.display_name + collection.created_at,
      name: collection.display_name,
      logoImg: collection.hero_image,
      secondaryImg: mySvg
    }));

  const mapAssetsDataToListFormat = (data: assetNode[] | undefined) => data?.map(asset => (
    {
      id: asset.id,
      name: asset.name,
      logoImg: undefined,
      secondaryImg: undefined
    })
  );

  const mapUsersDataToListFormat = (data: assetNode[] | undefined) => data?.map(user => (
    {
      id: user.id,
      name: user.name,
      logoImg: undefined,
      secondaryImg: undefined
    })
  );

  const mapTagsDataToListFormat = (data: assetNode[] | undefined) => data?.map(user => (
    {
      id: user.id,
      name: user.name,
      logoImg: undefined,
      secondaryImg: undefined
    })
  );
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const tabsPanelsOptions = [
    { getData: getCollections, mapData: mapColletionsDataToListFormat, value: value, index: 0 },
    { getData: getAssets, mapData: mapAssetsDataToListFormat, value: value, index: 1 },
    { getData: getUsers, mapData: mapUsersDataToListFormat, value: value, index: 2 },
    { getData: getTags, mapData: mapTagsDataToListFormat, value: value, index: 4 }
  ]

  const mapTabOptionsProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const tabsOptions = [
    { name: "Collections", ...mapTabOptionsProps(0), value: 0 },
    { name: "Assets", ...mapTabOptionsProps(1), value: 1 },
    { name: "Users", ...mapTabOptionsProps(2), value: 2 },
    { name: "Tags", ...mapTabOptionsProps(3), value: 3 },
  ]
  return {
    value,
    handleChange,
    mapColletionsDataToListFormat,
    mapAssetsDataToListFormat,
    mapUsersDataToListFormat,
    tabsPanelsOptions,
    tabsOptions
  }
}