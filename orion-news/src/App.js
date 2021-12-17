import NewsCard from "./NewsCard/NewsCard";
import "./app.scss";


function App() {
  const news = [
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ostroukhov_Golden_Autumn_1886_gtg.jpg/350px-Ostroukhov_Golden_Autumn_1886_gtg.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ostroukhov_Golden_Autumn_1886_gtg.jpg/350px-Ostroukhov_Golden_Autumn_1886_gtg.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
    {
      name: "АНТИКРИЗИСНЫЙ ПЛАН ЗА 3 ДНЯ",
      bgUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      readMoreUrl: "https://i.ytimg.com/vi/GnxOcYaSwQg/maxresdefault.jpg",
      text: "Для многих компаний кризис, вызван-ный распространением инфекции COVID-19, сейчас является одним из тяжелейших испытаний за всё время. ",
      date: "April 15, 2021",
      stat: {
        likes: "102",
        comments: "13",
        share: "26",
      }
    },
  ];

  return (
    <div className="orionNews">
      
      <div className="orionNews__title">
        <div className="orionNews__title-line"></div>
        <h2 className="orionNews__title-text">ПОСЛЕДНИЕ НОВОСТИ</h2>
      </div>
      <div className="orionNews__newCard">
        {news.map((news1, idx) => {
          return (
            <NewsCard
              newsName={news1.name}
              newsbgUrl={news1.bgUrl}
              newsDate={news1.date}
              newsText={news1.text}
              newsreadMoreUrl={news1.readMoreUrl}
              newsStatLikes={news1.stat.likes}
              newsStatComments={news1.stat.comments}
              newsStatShare={news1.stat.share}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
