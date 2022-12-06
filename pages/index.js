import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className={styles.navigationBg}>
          <div className={styles.navigation}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-2'>
                  <div className={styles.logo}>
                    <h1>YOBOSHU</h1>
                  </div>
                </div>
                <div className='col-lg-10'>
                  <div className={styles.navigationList}>
                    <ul>
                      <li>How it work</li>
                      <li>About</li>
                      <li>Scientific Advisory Board</li>
                      <li>Leadership & Mentors</li>
                      <li>Research & Blogs</li>
                      <li>For Employer</li>
                      <li>Career </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className={styles.headerContent}>
                    <h1>Weight loss is one thing.
                      We have helped 5678 real
                      people to</h1>
                    <ul>
                      <li>
                        <div></div>
                        <div>
                          Sleep better
                          Reduce stress
                          Eat more mindfully
                          Deal with food triggers
                          Improve physical activities
                          Improve relationship with foods
                        </div>
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className={styles.headerContent}>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
