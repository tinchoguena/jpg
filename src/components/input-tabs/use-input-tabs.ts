import { ChangeEvent, useState } from "react";
import mySvg from "../../assets/Icon-Verified.svg";
import { getCollections } from "../../services/get-collections";
import { getAssets } from "../../services/get-assets-mocked";
import { getUsers } from "../../services/get-users-mocked";
import { getTags } from "../../services/get-tags-mocked";
import userImg from "../../assets/user.svg";
interface CollectionNode {
  created_at: string;
  description: string;
  display_name: string;
  global_floor_lovelace: number;
  global_volume_lovelace_all_time: number;
  hero_image: string;
  is_minting: boolean;
  is_taken_down: boolean;
  is_verified: boolean;
  jpg_floor_lovelace: number;
  jpg_volume_lovelace_24h: number;
  likes: number;
  nsfw: boolean;
  optimized_source: string;
  owners: number;
  policy_id: string;
  reports: number;
  source: string;
  state_of_project: string;
  supply: number;
  url: string;
  views: number;
  _meta: any;
}

interface assetNode {
  name: string;
  id: string;
}

export const useInputTabs = () => {
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showList, setShowList] = useState(false);
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(e.target.value);
  const handleOnClick = () => setShowList(!showList);

  const mapColletionsDataToListFormat = (data: CollectionNode[] | undefined) =>
    data?.map((collection) => ({
      id: collection.display_name + collection.created_at,
      name: collection.display_name,
      logoImg: collection.hero_image,
      secondaryImg: collection?.is_verified ? mySvg : undefined,
      rightLegend: "5 items",
    }));

  const mapAssetsDataToListFormat = (data: assetNode[] | undefined) =>
    data?.map((asset) => ({
      id: asset.id,
      name: asset.name,
      logoImg: undefined,
      secondaryImg: undefined,
      rightLegend: undefined,
    }));

  const mapUsersDataToListFormat = (data: assetNode[] | undefined) =>
    data?.map((user) => ({
      id: user.id,
      name: user.name,
      logoImg: userImg,
      secondaryImg: undefined,
      rightLegend: "@username",
    }));

  const mapTagsDataToListFormat = (data: assetNode[] | undefined) =>
    data?.map((tag) => ({
      id: tag.id,
      name: tag.name,
      logoImg: undefined,
      secondaryImg: undefined,
      rightLegend: tag.name,
    }));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabsPanelsOptions = [
    {
      getData: getCollections,
      mapData: mapColletionsDataToListFormat,
      value: value,
      index: 0,
    },
    {
      getData: getAssets,
      mapData: mapAssetsDataToListFormat,
      value: value,
      index: 1,
    },
    {
      getData: getUsers,
      mapData: mapUsersDataToListFormat,
      value: value,
      index: 2,
    },
    {
      getData: getTags,
      mapData: mapTagsDataToListFormat,
      value: value,
      index: 3,
    },
  ];

  const mapTabOptionsProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const tabsOptions = [
    { name: "Collections", ...mapTabOptionsProps(0), value: 0 },
    { name: "Assets", ...mapTabOptionsProps(1), value: 1 },
    { name: "Users", ...mapTabOptionsProps(2), value: 2 },
    { name: "Tags", ...mapTabOptionsProps(3), value: 3 },
  ];
  return {
    value,
    handleChange,
    mapColletionsDataToListFormat,
    mapAssetsDataToListFormat,
    mapUsersDataToListFormat,
    tabsPanelsOptions,
    tabsOptions,
    searchTerm,
    showList,
    handleSearchInput,
    handleOnClick,
  };
};
