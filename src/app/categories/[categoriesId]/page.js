import { getCategoryNews } from "@/utils/getCategoryNews";
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
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  //   console.log(searchParams);
  const { data } = await getCategoryNews(searchParams.category);

  // console.log(data);

  return (
    <div>
      <h3>Dynamic News Page: {searchParams.category} </h3>
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}{" "}
      </h1>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        
        {
            data.map(news => (
                <Grid key={news.id} item xs={6}>
       <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
       <Card>
            <CardMedia sx={{
                "& img": {
                    width: '100%',
                    height: '250px'
                }
            }}>
              <Image src={news.thumbnail_url} alt="topNews" height={400} width={800} />
            </CardMedia>
            <CardContent>
              <span className="  my-3 rounded px-2 text-white bg-red-500 ">
                {news.category}
              </span>
              <Typography gutterBottom variant="h6" component="div">
                {news.title.length>30 ? news.title.slice(0 ,30)+'...' : news.title}
              </Typography>
              <Typography gutterBottom className="my-3">
                {news.author.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {news.details.length>200? news.details.slice(0, 200)+ '...' : news.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
       </Link>
        </Grid>
            ))
        }

      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
