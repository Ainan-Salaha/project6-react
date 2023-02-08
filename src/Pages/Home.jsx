import React, { useContext } from 'react'
import { store } from './Details'
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
import SmallCard from "../Component/SmallCard";

const Home = () => {
  const [details] = useContext(store)
  console.log(details)
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            <Link to="/Technology">
              {" "}
              <img
                src={"https://tse4.mm.bing.net/th?id=OIP.K8urvQKqHarydD5ixvdQBAHaFI&pid=Api&P=0"}
                alt="not found"
              />
            </Link>
          </div>
          <div className="home_right_container">
            <div className="home__sec">
              <Link to="/fitness">
                {" "}
                <img
                  src={"https://images.indianexpress.com/2020/04/headstand-1200.jpg"}
                  alt="not found"
                />
              </Link>
            </div>

            <div className="home__thir">
              <Link to="/Food">
                {" "}
                <img
                  src={"https://media.istockphoto.com/photos/biryani-picture-id1305452646?b=1&k=20&m=1305452646&s=170667a&w=0&h=1M4qIQor9-oTbDFc8osB9TKQEEMBn7j_4D1Qy7hRdNk="}
                  alt="not found"
                />
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {details
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {details
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {details
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {details
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sidebar2">
          {details
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <SmallCard
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home__left">
          {details
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {details
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {details
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home