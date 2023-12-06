import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const { data } = await getAllNews();
  // console.log(data);
  return (
    <Box className="my-5">
      <Card>
        <CardMedia>
          <Image
            src={data[0].thumbnail_url}
            alt="topNews"
            height={500}
            width={800}
          />
        </CardMedia>
        <CardContent>
          <p className="w-[100px] my-5 rounded px-2 text-white bg-red-500 ">
            {data[0].category}
          </p>
          <Typography gutterBottom variant="h5" component="div">
            {data[0].title}
          </Typography>
          <Typography gutterBottom className="my-3">
            By {data[0].author.name} - {data[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[0].details.length > 200
              ? data[0].details.slice(0, 200) + "..."
              : data[0].details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Box sx={{ width: "100%" }}>
        <Grid
          className="mt-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
       {
        data.slice(0,4).map(news => (
          <Grid  key={news.id} item xs={6}>
          <Card>
            <CardMedia>
              <Image src={news.thumbnail_url} alt="topNews" height={300} width={800} />
            </CardMedia>
            <CardContent>
              <p className="w-[100px] my-5 rounded px-2 text-white bg-red-500 ">
                {news.category}
              </p>
              <Typography gutterBottom variant="h5" component="div">
              {news.title}
              </Typography>
              <Typography gutterBottom className="my-3">
                By MH Ripon -Mar 18,2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout......
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        ))
       }

        </Grid>
      </Box>
    </Box>
  );
};

export default LatestNews;
