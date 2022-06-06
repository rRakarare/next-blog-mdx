import { HStack, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import SingleLeistung from "../../components/Leistungen/single";

const leistungen = () => {

  return (
    <>
      <VStack marginTop={"20rem"} marginLeft={"20rem"} spacing={"70vh"} align={"flex-start"}>
        <SingleLeistung
          FOR={"Lappens"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
        />
      </VStack>
    </>
  );
};

export default leistungen;
