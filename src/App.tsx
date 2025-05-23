import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { FileList } from './components/FileList/FileList';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const MainContent = styled.main`
    padding-top: 80px;
    width: 100vw;
    margin: 0;
    box-sizing: border-box;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<FileList />} />
                        {/* <Route path="/files" element={<FileList />} /> */}
                        <Route path="/about" element={<div>О нас</div>} />
                    </Routes>
                </MainContent>
            </AppContainer>
        </Router>
    );
}

export default App;
