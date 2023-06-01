// import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./singleContent.css";
// import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <>
      {/* <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      /> */}
      <div className="media">
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
      </div>
    </>
  );
};

export default SingleContent;
