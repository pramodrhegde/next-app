'use client';
import styles from './page.module.css'
import PageTree from '../components/PageTree/PageTree';
import {fetchPageTreeData} from './pageTreeData';
import {useState} from 'react';

export default function Home() {
  // const data = await fetchPageTreeData();
  const [data, setData] = useState();

  function handleItemClick(e) {
    setData(e.target.innerText);
  }
  
  return (
    <main className={styles.main}>
      <div className={`${styles.left} ${styles.padding2rem}`}>
        <PageTree pageTreeData={fetchPageTreeData()} handleItemClick={handleItemClick}/>
      </div>
      <div className={`${styles.right} ${styles.padding2rem}`}>{data}</div>
    </main>
  )
}
