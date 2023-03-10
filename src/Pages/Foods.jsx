import React, { useContext } from 'react'
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Foods = () => {
  const [details] = useContext(store);
  console.log(details);
  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Food</h1>
      <h1 style={{ margin: "20px 0px 20px 43.65%", display: "inline-block" }}>Top Posts</h1>
      <div className="main__container">
        <div className='rightbar'>
          {
            details.filter((article) => { return article.category === "Food" }).map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))
          }
        </div>

        <div className="sidebar">
          {
            details.filter((article) => { return article.category === "Food" }).map((n) => (
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
export default Foods;