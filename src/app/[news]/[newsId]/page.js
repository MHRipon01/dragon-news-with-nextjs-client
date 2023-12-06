import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);

  return (
    <Box className='my-5'>
      <Container>
        <Grid container spacing={2} className="mt-5">
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              alt="news"
              width={800}
              height={500}
            />

            <Grid container spacing={2} className="mt-5">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  alt="news"
                  width={800}
                  height={500}
                />{" "}
              </Grid>
              <Grid item lg={6}>
              <Image
                  src={news.thumbnail_url}
                  alt="news"
                  width={800}
                  height={500} 
                />{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component='h2'>{news.title} </Typography>
            <Box sx={{
                display: 'flex', gap:3,
alignItems:'center'
            }}>
            <Avatar alt="author" src={news.author.img} />
            <Typography>By {news.author.name}</Typography>
            <Typography>published - {news.author.published_date}</Typography>
            </Box>
            <Typography style={{
                textAlign: 'justify',
                whiteSpace: 'pre-line',
                margin: '10px 0px',
                color: 'gray'
            }}>{news.details}</Typography>
          </Grid>
        </Grid>
      </Container>
      {params.newsId}
    </Box>
  );
};

export default NewsDetailPage;
