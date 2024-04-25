import LoginComponent from '@/components/Login&SignUp/LoginComponent';
import { Box } from '@mui/material';

function Login() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: {
          lg: `url("https://gn01.liara.run/images/media/pictures/photo_2024-02-26_06-58-26.jpg")`, // Apply background image for lg and up
          md: `url("https://gn01.liara.run/images/media/pictures/photo_2024-02-26_06-58-26.jpg")`, // Apply background image for md and up
          sm: 'none', // Remove background image for sm and below
          xs: 'none', // Remove background image for xs
        },
        backgroundSize: 'cover', // Cover the entire space, maintaining aspect ratio
        backgroundPosition: {
          lg: 'center', // Center the background image for lg and up
          md: 'left', // Align background image to the right for md and down
          sm: 'center', // Not applicable as image is removed but set for consistency
          xs: 'center', // Not applicable as image is removed but set for consistency
        },
        backgroundColor: {
          sm: '#8ECDDD', // Change the background color for sm and below
          xs: '#8ECDDD', // Change the background color for xs
        },
        backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
        display: 'flex',
        justifyContent: {xs: 'center', lg: 'flex-end'},
        alignItems: 'center',
        pr: {lg: 30}
      }}
    >
      <LoginComponent />
    </Box>
  );
}

export default Login;
