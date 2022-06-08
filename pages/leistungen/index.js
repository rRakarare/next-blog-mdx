import { HStack, useColorMode, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import SingleLeistung from "../../components/Leistungen/single";

const leistungen = () => {

  return (
    <>
      <VStack marginTop={"20rem"} marginLeft={"20rem"} align={"flex-start"}>
        <SingleLeistung
          FOR={"Lappens"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={1}
          IMG="test"
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={2}
          IMG="test2"
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={3}
          IMG="test3"
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={4}
          IMG="test4"
        />
      </VStack>
    </>
  );
};

export default leistungen;
