import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import StickyFooter from './StickyFooter';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>
        <ProTip />
        <Copyright />
        <StickyFooter />
      </Box>
    </Container>
  );
}
// import React from 'react';
// import './style.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Layout from './pages/Layout';
// import Blogs from './pages/Blogs';
// import Nopage from './pages/Nopage';

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route path="contact" element={<Contact />} />
//             <Route path="layout" element={<Layout />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="*" element={<Nopage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
