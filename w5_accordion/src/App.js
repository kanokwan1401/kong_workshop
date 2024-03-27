import { useState } from 'react';
import './App.css';
import data from './data';
import SingleContent from './components/SingleContent';

function App() {
  const [content, setContent] = useState(data)

  return (
    <main>
      <div className="container">
        <h2>เครื่องมือพัฒนาเว็บ 2021🦕</h2>
        <section>
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
