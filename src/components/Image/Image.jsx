/* eslint-disable react/function-component-definition */
// prop-types
import PropTypes from "prop-types";

// react-shimmer
import { Image as Img, Shimmer } from "react-shimmer";

const Image = (props) => {
  const { img, width, height, className, style } = props;
  return (
    <Img
      NativeImgProps={{ width, height, className, style }}
      src={img}
      fallback={<Shimmer width={width} height={height} />}
    />
  );
};

Image.defaultProps = {
  className: {},
  style: {},
  height: 35,
  width: 35,
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.objectOf(PropTypes.string || PropTypes.number),
  style: PropTypes.objectOf(PropTypes.string || PropTypes.number),
};

export default Image;
