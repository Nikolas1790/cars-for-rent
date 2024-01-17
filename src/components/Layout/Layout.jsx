import { Outlet } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';
// // import { AppBar } from './AppBar/AppBar';

// // import { Footer } from './Footer/Footer';
// // import { Container } from './App.styled';

import { StyledLink } from './Layout.styled';
import { Suspense } from 'react';

// export const Layout = () => {
//   return (
//     // <Container >
//     //   <AppBar />
//     //   <Suspense fallback={null}>
//     //     <Outlet />
//     //   </Suspense>
      
//     //   <Toaster position="top-right" reverseOrder={false} />
//     //   <Footer/>
//     // </Container>
//   );
// };
export const Layout = () => {
  return (
    <>
    <header>
     <nav>
       <StyledLink to="/">Home page</StyledLink>
       <StyledLink to="/catalog">Car park</StyledLink>
       <StyledLink to="/favorites">Favorites</StyledLink>      
     </nav>
    </header>
    <main>
      <Suspense fallback={null}>
        <Outlet />  
      </Suspense>
    </main>  
    </>
  );
};
