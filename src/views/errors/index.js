/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NotFound = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const goBack = () => navigate(-1)

  console.log("props", props)

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        {props?.loggedIn ? <>
        <Typography variant='h1' sx={{ letterSpacing: 4, my: 3 }}>Oops</Typography>
        <Typography variant='h4' sx={{ my: 2, fontWeight: 500 }}>
          404 - Page not found
        </Typography>
        <Typography variant='body1' sx={{ letterSpacing: 1, lineHeight: 1.5 }}>
          The page you&apos;re looking for doesn&apos;t exist. <br />
          <span style={{ color: theme.palette.primary.main, cursor: 'pointer' }} onClick={goBack} role='button'>
            Go back
        </span>  {/* , or visit <a href='/' style={{ textDecoration: 'none' }}>home page</a> */}
        </Typography>
        </>:
        <>
        <Typography variant='h1' sx={{ letterSpacing: 4, my: 3 }}>Oops</Typography>
        <Typography variant='h4' sx={{ my: 2, fontWeight: 500 }}>
          Access Denied
        </Typography>
        <Typography variant='body1' sx={{ letterSpacing: 1, lineHeight: 1.5 }}>
        You are not authenticated to access this page. <br />
          <span style={{ color: theme.palette.primary.main, cursor: 'pointer' }} onClick={goBack} role='button'>
            Go back
          </span>, or go to <a href='/' style={{ textDecoration: 'none' }}>Login</a> page
        </Typography>
        </>}
      </Box>
    </Box>
  );
};

export default NotFound;
