import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Dan | Resume</title>
        <meta
          name='description'
          content="I'm a web developer and Shopify developer specializing in
              high-quality eCommerce stores."
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-sm pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-accent-2 my-md p-md w-full flex justify-between items-center'>
          <h2 className='text-center'>Dan Dulgerian</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-md text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Hard Working <span className='px-xs'>|</span> Web Development{' '}
              <span className='px-xs'>|</span> Quality Teammate
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Hard Working</p>
            <p className='py-2'>Web Development</p>
            <p>Quality Teammate</p>
          </div>
        </div>
        <p>
          Motivated and passionate web development professional with experience
          in customer service and team leadership in a range of working
          environments. Effective communicator and eager collaborator as a
          member of a team. Strong analytical skills and easily adaptable
          mindset in challenging situations. Experience working with culturally
          diverse colleagues in different countries.
        </p>

        {/* Skills */}
        <div className='text-center py-md'>
          <h5 className='text-center underline text-[18px] py-sm'>Skills</h5>
          <p className='py-sm'>
            Front-End Web Developer
            <span className='px-sm'>|</span>HTML
            <span className='px-sm'>|</span>CSS
            <span className='px-sm'>|</span>Javascript
            <span className='px-sm'>|</span>React
            <span className='px-sm'>|</span>Next JS
            <span className='px-sm'>|</span>Express
            <span className='px-sm'>|</span>Node JS
            <span className='px-sm'>|</span>Shopify Liquid
            <span className='px-sm'>|</span>Tailwind
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-md'>
          Current Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-md+'>
          <p className='italic'>
            <span className='font-bold italic'>Monumental</span>
            <span className='px-sm'>|</span>Remote
          </p>
          <p className='py-xs italic'>Shopify Developer</p>
          <ul className='list-disc list-outside px-11 py-xs leading-relaxed'>
            <li>
              Ensure comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Develop user-friendly backend settings for client customization.
            </li>
            <li>
              Integrate third-party applications to match clients' themes.
            </li>
            <li>Improve performance through testing and debugging.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-md'>
          Past Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-md+'>
          <p className='italic'>
            <span className='font-bold'>
              Budapest British International Academy
            </span>
            <span className='px-sm'>|</span>Budapest, Hungary
          </p>
          <p className='py-xs italic'>Year 3 Teacher (Aug. 2021 – Jan. 2022)</p>
          <ul className='list-disc list-outside px-11 py-xs leading-relaxed'>
            <li>Taught Year 3 class following British Curriculum.</li>
            <li>
              Responsible for recording progress of students in all areas of
              learning and social development.
            </li>
            <li>
              Coordinated with colleagues to organize break and duties schedule.
            </li>
          </ul>
        </div>
        <div className='py-md+'>
          <p className='italic'>
            <span className='font-bold'>
              Maria International School of Bucharest
            </span>
            <span className='px-sm'>|</span>Bucharest, Romania
          </p>
          <p className='py-xs italic'>
            Year 2 Teacher | Head of Key Stage 1 (Aug. 2019 – Jun. 2021)
          </p>
          <ul className='list-disc list-outside px-11 py-xs leading-relaxed'>
            <li>Taught Year 2 class following British Curriculum.</li>
            <li>
              Responsible for recording progress of students in all areas of
              learning and social development.
            </li>
            <li>
              Collaborated with staff members to plan COVID-19 online teaching
              strategy.
            </li>
            <li>Organized special events in collaboration with colleagues.</li>
          </ul>
        </div>
        <div className='py-md+'>
          <p className='italic'>
            <span className='font-bold'>
              Wellspring International Bilingual School (CIEM-Education)
            </span>
            <span className='px-sm'>|</span>Hanoi, Vietnam
          </p>
          <p className='py-xs italic'>
            Primary Teacher | CIEM Coordinator (Jul. 2017 – May. 2019)
          </p>
          <ul className='list-disc list-outside px-11 py-xs leading-relaxed'>
            <li>
              Taught 1st grade English (ESL) to classes of 20 students on
              average.
            </li>
            <li>
              Responsible for developing engaging daily lesson plans and
              creating high-quality teaching materials aligned to the
              curriculum.
            </li>
            <li>
              Recognized as an “Excellent Teacher” by school administration in
              the first and second semesters of the 2017-18 school year.
            </li>
            <li>
              Facilitated communication between staff and CIEM-Education as CIEM
              Coordinator.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
