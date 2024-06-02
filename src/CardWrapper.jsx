import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader } from "@mui/material";

const CardWrapper = ({ title, children }) => {
  /**
   * states
   */
  const [headerHeightState, setHeaderHeightState] = useState(0);

  /**
   * effects
   */
  const headerRef = useRef();

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    setHeaderHeightState(headerHeight);
  }, []);

  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardHeader
        title={title}
        sx={{ backgroundColor: "lightgrey" }}
        ref={headerRef}
      />
      <CardContent sx={{ height: `calc(100% - ${headerHeightState}px)` }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardWrapper;

CardWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
