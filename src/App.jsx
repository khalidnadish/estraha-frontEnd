import { useState,lazy,Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/menu/Menu";
import Navbar from "./components/menu/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import "./app.css"


const  Home =lazy(()=>import( "./pages/homepage/Home"));
const  Video =lazy(()=>import("./utils/Video"));
const  SignIn =lazy(()=>import( "./pages/loginpage/SignIn"));
const  Videopage =lazy(()=>import( "./pages/videopage/Videopage"));
const  Imagepage =lazy(()=>import( "./pages/imagepage/Imagepage"));
const  Complainepage =lazy(()=>import( "./pages/complainepage/Complainepage"));
const  Freedaypage =lazy(()=>import( "./pages/freedaypage/Freedaypage"));
const  Locationpage =lazy(()=>import( "./pages/locationpage/Locationpage"));
const  Momentspage =lazy(()=>import( "./pages/momentspage/Momentspage"));
const  Offerpage =lazy(()=>import( "./pages/offerpage/Offerpage"));
const  Spesficationpage =lazy(()=>import( "./pages/spesficationpage/Spesficationpage"));
const Rankingpage =lazy(()=>import("./pages/rankingpage/Rankingpage"));

 

const Container = styled.div`
  display: flex;
  
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
  
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="videopage" element={<Videopage />} />
                  <Route path="imagepage" element={<Imagepage />} />
                  <Route path="complainepage" element={<Complainepage />} />
                  <Route path="freedaypage" element={<Freedaypage />} />
                  <Route path="locationpage" element={<Locationpage />} />
                  <Route path="momentspage" element={<Momentspage />} />
                  <Route path="offerpage" element={<Offerpage />} />
                  <Route path="spesficationpage" element={<Spesficationpage />} />
                  <Route path="rankingpage" element={<Rankingpage />} />
                  
                  
                  
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
              </Suspense>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
