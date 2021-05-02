import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout";
import { ExtLinkIcon } from "../components/glaube";
// import SEO from "../components/seo"; 

// function EventPage(props) {
//   const events = props.data.allEvent.edges;
  


function EventPage({node}) {
  const osmCalQuery = useStaticQuery(graphql`
  {
    allEvents {
      edges {
        node {
          name
          url
          date {
            start
            end
            human
            human_short
          }
          location {
            short
            detailed
            venue
          }
          cancelled
        }
      }
    }
  }
  `)

  // 
  const events = osmCalQuery.allEvents.edges.length !== 0 ? osmCalQuery.allEvents.edges : null;
  return (
    <Layout>
      {/* <SEO 
            keywords={[``,``]}
            title=""
        />*/}
      <section className="flex flex-col items-center justify-center my-8">
        <div className="relative w-full flex py-8">            
          <div className="w-5xl px-4 py-5 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-xl border-b rounded-t">
            <div className="flex flex-col w-3xl md:w-6xl p-2 mb-8">
              <h3 className="uppercase text-xl px-0.5">Upcoming Events</h3>
              <h2 className="uppercase text-4xl text-semibold">近期活動</h2>
            </div>
            <ul className="flex flex-col">
            {process.env.NODE_ENV === "development" ? (
              //Dummy content 
              <li className="border-gray-400 flex flex-row mb-2">
                  <a href="https://osmcal.org/?in=TW" className="block hover:bg-gray-50 shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="text-xl font-medium mb-2">
                        督促小B作PTX導入工具大會 (Dummy)<ExtLinkIcon/>
                      </div>
                      <div className="text-gray-600 dark:text-gray-200 text-lg">
                        8th March
                      </div>
                      <div className="text-gray-600 dark:text-gray-200 text-sm">
                        MozSpace
                      </div>
                      <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Huashan, Taipei, Taiwan
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <div className="px-2 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        無時間表
                      </div>
                    </div>
                  </a>
              </li>
              ) : 
              null }
              {events === null ?   
                (// if OsmCal has no records of event in TW
                <h3>好像還沒更新 Nothing shows here :(</h3>)
              : events.map((event) => (
                // throw OsmCal events in TW
              <li className="border-gray-400 flex flex-row mb-2">
                <a className="cursor-pointer" href={event.node.url} className="block hover:bg-gray-50 shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="text-xl font-medium mb-2">
                      {event.node.name}<ExtLinkIcon/>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-lg">
                      {event.node.date.human}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                      {event.node.location.venue}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                      {event.node.location.short}
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <div className={'px-2 py-1 inline-flex text-base- leading-5 font-semibold rounded-full '+ ((event.node.cancelled === null ) ? 'bg-green-100 text-green-800': 'bg-red-100 text-red-800')}>
                        {(event.node.cancelled === null ) ? '如期舉辦' : '活期取消' }
                    </div>
                  </div>
                </a>
              </li>

              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventPage;