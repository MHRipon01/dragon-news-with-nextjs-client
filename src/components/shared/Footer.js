import { Box, Button, Container, IconButton, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
 

const Footer = () => {

    const navItems = [
        {
          route: 'Home',
          pathname: '/'
        },
        {
          route: 'pages',
          pathname: '/pages'
        },
        {
          route: 'Category',
          pathname: '/category'
        },
        {
          route: 'News',
          pathname: '/news'
        },
        {
          route: 'About',
          pathname: '/about'
        },
        {
          route: 'Contact',
          pathname: '/contact'
        },
      ];





    return (
        <Box className='bg-black px-3 py-10 w-full text-center' sx={{
            '& svg':{
              color: 'white'
            }
           }}>
            <Container>
           
           
            <Box>
          
          
           <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
      
      
          </Box>
          <Box className='w-full text-center'>
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
              <Button
              className='text-white'
              >
                {
                  item.route
                }
              </Button>
              </Link>
            ))}
          </Box>

          <Typography color="gray" variant="body2" textAlign="center"> 
            @2023 The Dragon News. Design by MHR
          </Typography>
            </Container>
            
        </Box>
    );
};

export default Footer;