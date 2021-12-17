import "./news-card.scss";

const newsCard = (props) => {
  return (
    <div className="news-card">
      <div className="news-card__photo" style={{ backgroundImage: `url(${props.newsbgUrl})` }}></div>
      <div className="news-card__info">
        <div className="news-card__news">
          <span className="news-card__date">{props.newsDate}</span>
          <h3 className="news-card__name">{props.newsName}</h3>
        </div>
        <p className="news-card__news-text">{props.newsText}</p>
        <div className="news-card__stat">
          <a className="news-card__readMore" href={`${props.newsreadMoreUrl}`}>Читать далее...</a>
            <div className="news-card__stat-item">
              <span className="news-card__stat-icon"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99984 15.7917L7.7915 14.6917C3.49984 10.8 0.666504 8.23333 0.666504 5.08333C0.666504 2.51667 2.68317 0.5 5.24984 0.5C6.69984 0.5 8.0915 1.175 8.99984 2.24167C9.90817 1.175 11.2998 0.5 12.7498 0.5C15.3165 0.5 17.3332 2.51667 17.3332 5.08333C17.3332 8.23333 14.4998 10.8 10.2082 14.7L8.99984 15.7917Z" fill="black" />
              </svg></span>
              <p className="news-card__stat-count">{props.newsStatLikes}</p>
            </div>
            <div className="news-card__stat-item">
              <span className="news-card__stat-icon"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6665 0.666016H2.33317C1.4165 0.666016 0.666504 1.41602 0.666504 2.33268V17.3327L3.99984 13.9993H15.6665C16.5832 13.9993 17.3332 13.2493 17.3332 12.3327V2.33268C17.3332 1.41602 16.5832 0.666016 15.6665 0.666016Z" fill="black" />
              </svg></span>
              <p className="news-card__stat-count">{props.newsStatComments}</p>
            </div>
            <div className="news-card__stat-item">
              <span className="news-card__stat-icon"><svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4946 13.5204C12.8218 13.5204 12.2199 13.7896 11.7596 14.2112L5.44796 10.4881C5.49222 10.2818 5.52763 10.0754 5.52763 9.8601C5.52763 9.64479 5.49222 9.43845 5.44796 9.2321L11.6888 5.54485C12.1668 5.99342 12.7953 6.27153 13.4946 6.27153C14.9641 6.27153 16.1503 5.06936 16.1503 3.5801C16.1503 2.09084 14.9641 0.888672 13.4946 0.888672C12.0251 0.888672 10.8389 2.09084 10.8389 3.5801C10.8389 3.79542 10.8744 4.00176 10.9186 4.2081L4.67782 7.89536C4.1998 7.44679 3.57129 7.16867 2.87197 7.16867C1.4025 7.16867 0.216309 8.37085 0.216309 9.8601C0.216309 11.3494 1.4025 12.5515 2.87197 12.5515C3.57129 12.5515 4.1998 12.2734 4.67782 11.8248L10.9806 15.557C10.9363 15.7454 10.9098 15.9427 10.9098 16.1401C10.9098 17.5845 12.0694 18.7598 13.4946 18.7598C14.9198 18.7598 16.0795 17.5845 16.0795 16.1401C16.0795 14.6957 14.9198 13.5204 13.4946 13.5204Z" fill="black" />
              </svg></span>
              <p className="news-card__stat-count">{props.newsStatShare}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsCard;