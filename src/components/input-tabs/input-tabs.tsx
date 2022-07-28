import React, { SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabsContainer } from "./styles";
import { GenericListNode, RenderList } from "../common/render-list";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabOptionNode {
  name: string;
  id: string;
  "aria-controls": string;
  value: number;
}

interface TabPanelOption {
  mapData: (data: any) => GenericListNode[] | undefined;
  getData: () => Promise<any>;
  value: number;
  index: number;
}

interface RenderTabPanelsProps {
  tabsPanelsOptions: TabPanelOption[];
  searchInput: string;
}

interface RenderTabOptionsProps<T> {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  list: T[];
}

const RenderTabOptions = ({
  list,
  value,
  handleChange,
}: RenderTabOptionsProps<TabOptionNode>) => (
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    {list.map((item) => (
      <Tab
        label={item.name}
        {...item}
        tabIndex={item.value}
        key={`key-for-${item.name}-${item.value}`}
      />
    ))}
  </Tabs>
);

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const RenderTabPanels = ({
  tabsPanelsOptions,
  searchInput,
}: RenderTabPanelsProps) => (
  <>
    {tabsPanelsOptions.map((tagPanelOption) => (
      <TabPanel
        value={tagPanelOption.value}
        index={tagPanelOption.index}
        key={`key-for-${tagPanelOption.index}-${tagPanelOption.value}`}
      >
        <RenderList
          getData={tagPanelOption.getData}
          mapData={tagPanelOption.mapData}
          searchInput={searchInput}
        />
      </TabPanel>
    ))}
  </>
);

interface TabsListProps {
  value: number;
  handleChange: (
    event: SyntheticEvent<Element, Event>,
    newValue: number
  ) => void;
  tabsPanelsOptions: TabPanelOption[];
  tabsOptions: TabOptionNode[];
  searchInput: string;
}

export const TabsList = ({
  value,
  handleChange,
  tabsPanelsOptions,
  tabsOptions,
  searchInput,
}: TabsListProps) => {
  return (
    <TabsContainer sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <RenderTabOptions
          list={tabsOptions}
          value={value}
          handleChange={handleChange}
        />
      </Box>
      <RenderTabPanels
        tabsPanelsOptions={tabsPanelsOptions}
        searchInput={searchInput}
      />
    </TabsContainer>
  );
};
