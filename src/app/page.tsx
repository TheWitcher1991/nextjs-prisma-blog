import Image from 'next/image'
import styles from '../styles/page.module.css'
import layout from '../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faTerminal, faWrench, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'

export default function IndexPage() {
  return (
      <div>
          <div className={layout.meHead}>
              <Image
                  src={require('../../public/img/img.jpg')}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                  style={{borderRadius: 500,objectFit: 'cover'}}
              />
              <span className={layout.meName}>Hi, I'm TheWitcher1991</span>
              <h1 className={layout.meTitle}>Building digital product, brands, and experience</h1>

          </div>

          <div className={styles.container}>

              <div className={layout.ctxTitle}>
                  <span className={layout.ctxLine}></span>
                  <div className={layout.ctxNum}>1</div>
                  <span className={layout.ctxSpan}>Мои разработки</span>
              </div>

              <div className={layout.homePort}>
                  <div className={layout.homePortL}>
                      <Image
                          src={require('../../public/img/portfolio/1.png')}
                          width={260}
                          height={570}
                          className={layout.ctxImg1}
                      />
                      <Image
                          src={require('../../public/img/portfolio/2.png')}
                          width={260}
                          height={570}
                          className={layout.ctxImg2}
                      />
                      <Image
                          src={require('../../public/img/portfolio/3.png')}
                          width={260}
                          height={570}
                          className={layout.ctxImg3}
                      />

                  </div>

                  <div className={layout.homePortR}>
                      <div className={layout.ctxBlock}>
                              <span className={layout.ctxBlockIcon}>
                                   <FontAwesomeIcon
                                       icon={faWrench}
                                   />
                              </span>
                          <div className={layout.ctxBlockH1}>
                              The complete toolkit for the Web
                          </div>
                          <div className={layout.ctxBlockText}>Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.</div>
                      </div>
                      <div className={layout.ctxBlock}>
                              <span className={layout.ctxBlockIcon}>
                                   <FontAwesomeIcon
                                       icon={faServer}
                                   />
                              </span>
                          <div className={layout.ctxBlockH1}>
                              Easy integration with your backend
                          </div>
                          <div className={layout.ctxBlockText}>Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.</div>
                      </div>
                      <div className={layout.ctxBlock}>
                              <span className={layout.ctxBlockIcon}>
                                   <FontAwesomeIcon
                                       icon={faTerminal}
                                   />
                              </span>
                          <div className={layout.ctxBlockH1}>
                              End-to-end testing on Localhost
                          </div>
                          <div className={layout.ctxBlockText}>From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.</div>
                      </div>
                  </div>
              </div>



          </div>
      </div>
  )
}
