import { Button, ButtonGroup, GridItem } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import SideNav from "./components/SideNav";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import navLi from "./navLi";
import { useRef, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [isHidden, setHidden] = useState(false);

  const onToggleHandler = () => {
    setHidden(!isHidden);
  };

  console.log(isHidden);

  const navRefs = navLi.reduce(
    (acc, { section }) => ({ ...acc, [section]: useRef(null) }),
    {}
  );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main" "aside" "footer"`,
          lg: `"aside main"  "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="aside">
          <SideNav isHidden={isHidden} navRefs={navRefs} />
        </GridItem>

        <GridItem area="main">
          <MainContainer>
            <Header onToggleHandler={onToggleHandler} navRefs={navRefs} />
            <MiddleSection navRefs={navRefs} />
          </MainContainer>
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
