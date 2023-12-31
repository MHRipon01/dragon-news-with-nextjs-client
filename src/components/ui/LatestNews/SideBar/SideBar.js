import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-12">
      <Card>
        <CardMedia>
          <Image src={sideBarNews} alt="topNews" width={800} />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] my-5 rounded px-2 text-white bg-red-500 ">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom className="my-3">
            By MH Ripon -Mar 18,2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout......
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia>
          <Image src={sideBarNews} alt="topNews" width={800} />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] my-5 rounded px-2 text-white bg-red-500 ">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom className="my-3">
            By MH Ripon -Mar 18,2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout......
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia>
          <Image src={sideBarNews} alt="topNews" width={800} />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] my-5 rounded px-2 text-white bg-red-500 ">
            Technology
          </p>
          <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom className="my-3">
            By MH Ripon -Mar 18,2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout......
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SideBar;
