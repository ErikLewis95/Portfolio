import { products } from "../data/data.js";
import PortFolio from "./Portfolio";
import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import "../index.css";
const PortFolioList = () => {
  return (
    <Box id="portfoliolist">
      <Carousel textAlign={"center"}>
        {products.length > 0 &&
          products.map((item) => (
            <Box key={item.id} p={4}>
              <PortFolio
                id={item.id}
                img={item.img}
                link2={item.link2}
                link1={item.link1}
                ProjectName={item.ProjectName}
                description={item.des}
                techstack={item.Tech}
                feature={item.feature}
                role={item.area}
              />
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default PortFolioList;
