import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImg from '@/assets/The Dragon News.png'
import {showCurrentDate} from '@/utils/showCurrentDate'

const Header = () => {
const currentDate = showCurrentDate()

    return (
        <Box className='w-full my-5'>
            <Container>
                <Image src={headerImg} alt="headerImage" className="mx-auto" width={500} height={500}/>
                <Typography color="gray" variant="body2" my={2} textAlign="center"> 
            Journalism without fear or favour.
          </Typography>
                <Typography color="gray" variant="body2" textAlign="center"> 
           {currentDate}
          </Typography>
          
             </Container>
        </Box>
    );
};

export default Header;