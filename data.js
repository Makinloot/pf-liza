import { v4 as uuidv4 } from "uuid";
import image1 from "/works/image-1.png";
import image2 from "/works/image-2.png";

const artWorks = [
  {
    id: uuidv4(),
    img: image1,
    name: "Some image",
  },
  {
    id: uuidv4(),
    img: image2,
    name: "Some image 2",
  },
  {
    id: uuidv4(),
    img: image1,
    name: "Some image",
  },
  {
    id: uuidv4(),
    img: image2,
    name: "Some image 2",
  },
  {
    id: uuidv4(),
    img: image1,
    name: "Some image",
  },
  {
    id: uuidv4(),
    img: image2,
    name: "Some image 2",
  },
];

export default artWorks;
