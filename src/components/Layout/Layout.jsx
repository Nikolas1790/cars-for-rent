import { Outlet } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';
// // import { AppBar } from './AppBar/AppBar';

// // import { Footer } from './Footer/Footer';
// // import { Container } from './App.styled';

// import { StyledLink } from './Layout.styled';
import { Suspense } from 'react';
import Header from 'components/Header/Header';

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
export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />  
        </Suspense>
      </main>  
    </div>
  );
};
