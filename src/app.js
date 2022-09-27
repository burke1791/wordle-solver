import React from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { GuessProvider } from './context/guessContext';
import GuessContainer from './components/guessContainer/guessContainer';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <Title style={{ color: '#fff', marginTop: 8 }}>Wordle Solver</Title>
      </Header>
      <Content style={{ maxWidth: '450px' }}>
        <GuessProvider>
          <GuessContainer />
        </GuessProvider>
      </Content>
    </Layout>
  );
}

export default App;