import React from 'react';

import Layout from './hoc/Layout/Layout';
import Chart from './containers/Chart/Chart';

function App() {
  return (
    <div>
      <Layout>
        <Chart/>
      </Layout>
    </div>
  );
}

export default App;
