'use client';
import React, { FunctionComponent } from 'react';
import styles from '@/components/image-and-text/styles.module.scss';
import Link from 'next/link';

const ImageAndText: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img src={'images/dusan.png'}
           alt={'Dušan Todorović in a formal white shirt'}
           width={200}
           height={200}
           className={styles.image}
      />
      <section className={styles.textSection}>
        <h1 className={styles.title}
        >
          <Link href={'/about'} className={styles.accented}>Dušan Todorović</Link>
        </h1>
        <p className={styles.tags}>
          Developer <span>|</span> Team Leader <span>|</span> React Specialist
        </p>
        <section className={`${styles.paragraphBelow} text`}>
          <p>Hello, internet! I'm Dušan Todorović, a dedicated Web Developer based in <a className={styles.locationLink}
                                                                                         href={'https://maps.app.goo.gl/DHTdsDU24RjWYhhV8'}
                                                                                         target={'_blank'}>
            Belgrade, Serbia
          </a>. I specialize in diving deep into the code
            and leading teams to ensure smooth project execution.</p>

          <ul className={styles.ul}>
            <li>Interested in my skills? Visit my <Link href={'/skills'}>skills page</Link>, or if you prefer - <Link
              href={'/cv'}>download my CV</Link>.
            </li>
            <li>If you're a company or individual client looking for a dedicated, experienced developer, <Link
              href="https://www.linkedin.com/in/dusan-todorovic-krcky/">let's chat</Link>! Let's make your project
              better... or at least, less buggy!
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default ImageAndText;