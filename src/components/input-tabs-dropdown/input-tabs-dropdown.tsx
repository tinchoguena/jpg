import { TabsList } from "../input-tabs/input-tabs";
import { useInputTabs } from "../input-tabs/use-input-tabs";
import { Container, InputContainer, Searchicon, SearchInput } from "./styles";
import search from "../../assets/search.svg";
export const InputTabsDropdown = () => {
  const {
    value,
    handleChange,
    tabsPanelsOptions,
    tabsOptions,
    searchTerm,
    showList,
    handleOnClick,
    handleSearchInput,
  } = useInputTabs();
  return (
    <>
      <Container>
        <InputContainer>
          <SearchInput
            defaultValue=""
            onChange={handleSearchInput}
            onClick={handleOnClick}
          />
          <Searchicon src={search} alt={"search"} />
        </InputContainer>

        {showList && (
          <TabsList
            value={value}
            handleChange={handleChange}
            tabsPanelsOptions={tabsPanelsOptions}
            tabsOptions={tabsOptions}
            // This search input is passed by the grand parent, in this case cause a big prop drilling.
            // Since it is an isolated component use a state manager will be an overkill.
            // This should be pass by the state manager getting it directly from the store.
            searchInput={searchTerm}
          />
        )}
      </Container>
    </>
  );
};
