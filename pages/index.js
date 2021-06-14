import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Container from '../components/Container'
import SingleColumn from '../components/SingleColumn'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAllPosts } from '../lib/lib'

function TabCarousel(props) {
  if (props.children) {
    if (props.children[props.index]) {
      return props.children[props.index]
    }
  }
  return null
}

function BackgroundImage(props) {
  return (
    <div className={`bg-img`} style={{backgroundImage: `url(${props.src})`}}/>
  )
}

export default function Home({ posts, events }) {
  
  const [tab, setTab] = useState(0)
  
  return (
    <Container>
      <SingleColumn>
        <Header />
        
        <section className="layout-narrow pt-48">
          <h1>A general-purpose,</h1>
          <h1>peer-to-peer,</h1>
          <h1>personal computing system.</h1>
        </section>
        
        <section className="layout-wide pt-48">
          <div className="bg-wall w-11/12 hero-card-height rounded-3xl flex">
            <div className="pt-20 pl-12 w-7/12">
              <div className="pb-8">
                <h2 className="p-0 m-0 pb-2">Introducing</h2><h2 className="text-green p-0 m-0">Port</h2>
              </div>
              <h3 className="pb-8">The Urbit client, now in beta.</h3>
              <p className="pb-24">Getting into Urbit is now as simple as installing an app on your computer.</p>
              <button className="button-lg type-ui mb-5 bg-green">Download For Mac</button>
              <a className="type-ui text-gray">View on GitHub</a>
            </div>
            <div className="bg-black w-full rounded-xl hero-image-height hero-image mt-8" />
          </div>
        </section>
        
        <section className="layout-narrow pt-48">
          <div className='flex items-center measure pb-12'>
            <h2 className="m-0 p-0 mr-4">Urbit Grants</h2>
            <button className="flex bg-green text-white type-ui px-4 items-center justify-center h-12 rounded-full">32 Open</button>
          </div>
          <div className="flex w-full items-center bg-washedGreen px-8 py-8 rounded-xl">
            <div className="flex items-center flex-col p-4 w-full">
              <h2 className="text-green">200+</h2>
              <h3 className="text-green text-center pt-2">Urbit stars awarded</h3>
            </div>
            <div className="h-24 w-4 bg-lightGreen" />
            <div className="flex items-center flex-col p-4 w-full">
              <h2 className="text-green">1M+</h2>
              <h3 className="text-green text-center pt-2">USD Rewarded</h3>
            </div>
            <div className="h-24 w-4 bg-lightGreen" />
            <div className="flex items-center flex-col p-4 w-full">
              <h2 className="text-green">90+</h2>
              <h3 className="text-green text-center pt-2">Grants completed</h3>
            </div>
          </div>
          <div className='measure py-12'>
              <p className="pb-12">We regularly give away address space to reward community contributions, including education, promotion, and development.</p>
              <button className="button-lg bg-green">View Grants</button>
          </div>
        </section>
        
        <section className="layout-narrow pt-48">
        <div className='measure'>
          <h2 className="pb-12">Build on Urbit</h2>
          <h3 className="pb-12">
            Urbit is a personal OS designed from scratch to run peer-to-peer applications.
          </h3>
          <p className="pb-12">
            It solves the hard problems of implementing a peer-to-peer network (including identity, NAT traversal, and exactly-once delivery) in the kernel so app developers canfocus on business logic. 
          </p>
          <p className="pb-12">
            The entire OS is a <a>single pure function</a> that provides application developers with strong guarantees: automated persistence and memory management, repeatable builds, and support for hot code reloading.
          </p>
          <p className="pb-12">
          You can get started learning how to <Link href=''><a>contribute to the project</a></Link>, or view a variety of <Link href=''><a>libraries</a></Link> for building on Urbit using the languages you already know.
          </p>
          <button className="button-lg type-ui bg-black">Read the Developer Docs</button>
        </div>
      </section>
      
        
        <section className="layout-narrow pt-48">
          <div className='flex items-center measure pb-12'>
            <button 
              onClick={() => setTab(0)} 
              className={`tab-button-lg mr-6 ${tab === 0 ? 'text-black' : 'text-gray'}`}>
              Blog
            </button>
            <button 
              onClick={() => setTab(1)}
              className={`tab-button-lg ${tab === 1 ? 'text-black' : 'text-gray'}`}>
              Events
            </button>
          </div>
          
          <TabCarousel index={tab}>
            <div className="blog-grid">
              {
                posts.slice(0, 4).map((post, i) => {
                  return (
                    <div className={`border-black cursor-pointer blog-grid-${i}`} key={post.slug}>
                      <Link href={'/blog/' + post.slug} key={`post-${post.slug}`}>
                        <div>
                          <BackgroundImage src={post.extra.image || ''} />
                          <p className='text-black type-h3 mt-2'>{post.title}</p>
                          <caption className='text-black mt-2'>{post.extra.author}</caption>
                          <caption className='text-gray mt-2'>{post.date}</caption>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
              <div>
                <Link href="/blog"><button className="button-lg type-ui">Read More</button></Link>
              </div>
            </div>
            <div className="blog-grid">
              {
                events.slice(0, 4).map((event, i) => {
                  return (
                    <div className={`border-black cursor-pointer blog-grid-${i}`} key={event.slug}>
                      <Link href={'/events/' + event.slug} key={`post-${event.slug}`}>
                        <div>
                          <BackgroundImage src={event.extra.image || ''} />
                          <p className='text-black mt-2'>{event.title || ''}</p>
                          <caption className='text-gray'>{event.date}</caption>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </TabCarousel>
          
          
        </section>
        
        <section className="layout-narrow pt-48">
          <div className='measure pb-12'>
            <h2 className="m-0 p-0 mr-4 pb-12">Inside the OS</h2>
            <p>We send monthly emails on system improvements, upcoming events, and community spotlights.</p>
          </div>
        </section>
      </SingleColumn>
      
      <Footer />
      
    </Container>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'extra',
  ], 'blog')
  
  const events = getAllPosts([
    'title',
    'slug',
    'date',
    'extra',
  ], 'events')

  return {
    props: { posts, events },
  }
}
