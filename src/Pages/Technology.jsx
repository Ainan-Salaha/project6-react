import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Technology = () => {
  const [details] = useContext(store)
  console.log(details)
  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
      <h1 style={{ margin: "20px 0px 20px 38%", display: "inline-block" }}>Top Posts</h1>

      <div className="main__container">
        <div className='rightbar'>
          {
            details.filter((article) => { return article.category === "Technology" }).map((n) => (<Card

              techId={n.id}
              imgUrl={n.img}
              description={n.description.slice(0, 200)}
              title={n.title}

            />))
          }
        </div>
        <div className="sidebar">
          {
            details.filter((article) => { return article.category === "Technology" }).map((n) => (
              <SmallCard
                articleid={n.id}
                imgUrl={n.img}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))
          }

          <div className='advertisement'>
            <p>Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology