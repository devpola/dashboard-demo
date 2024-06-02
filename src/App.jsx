import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { Box } from "@mui/material";
import CardWrapper from "./CardWrapper";

const ReactGridLayout = WidthProvider(RGL);

const GridItemWrapper = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ style, className, key, children, ...restOfProps }, ref) => {
    return (
      <div
        style={{ ...style }}
        className={[className].join(" ")}
        key={key}
        {...restOfProps}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

GridItemWrapper.displayName = "GridItemWrapper";

// layout is an array of objects, see the demo for more complete usage
const defaultLayout = [
  {
    w: 6,
    h: 23,
    x: 0,
    y: 0,
    i: "a",
    moved: false,
    static: false,
  },
  { w: 6, h: 35, x: 0, y: 23, i: "b", moved: false, static: false },
  { w: 6, h: 23, x: 6, y: 0, i: "c", moved: false, static: false },
];

const App = () => {
  /**
   * Functions
   */
  const saveToLS = (_layout) => {
    let strLayout = JSON.stringify(_layout);
    localStorage.setItem(`layout_dashboard`, strLayout);
  };

  const loadFromLS = () => {
    let listLayout = JSON.parse(localStorage.getItem(`layout_dashboard`));
    if (listLayout) return listLayout;
    else return defaultLayout;
  };

  /**
   * states
   */
  const [layoutState, setLayoutState] = useState(loadFromLS());

  /**
   * effects
   */
  useEffect(() => {
    // 최초 로딩시 layout 세팅
    setLayoutState(loadFromLS());
  }, []);

  return (
    <ReactGridLayout
      className="layout"
      layout={layoutState}
      cols={24}
      isDraggable
      isResizable
      rowHeight={10}
      width={"calc(100%)"}
      useCSSTransforms={true}
      onLayoutChange={(l) => {
        saveToLS(l);
        setLayoutState(l);
      }}
    >
      <GridItemWrapper key="a">
        <CardWrapper title={"제 1 공장"}>
          <Box sx={{ width: "100%", height: "100%" }}>도면</Box>
        </CardWrapper>
      </GridItemWrapper>
      <GridItemWrapper key="b">
        <CardWrapper title={"제 2 공장"}>
          <Box sx={{ width: "100%", height: "100%" }}>도면</Box>
        </CardWrapper>
      </GridItemWrapper>
      <GridItemWrapper key="c">
        <CardWrapper title={"제 3 공장"}>
          <Box sx={{ width: "100%", height: "100%" }}>도면</Box>
        </CardWrapper>
      </GridItemWrapper>
    </ReactGridLayout>
  );
};

export default App;
