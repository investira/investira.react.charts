import React, { memo } from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { helpers } from "../../utils";

const TinyLineChart = memo((props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart data={props.data}>
        <Line
          type={props.type}
          dataKey={props.dataKey}
          stroke={helpers.getColor(props.strokeColor)}
          strokeWidth={props.strokeWidth}
          dot={props.dot}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

TinyLineChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  dot: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
    PropTypes.element,
  ]),
  dataKey: PropTypes.string,
  type: PropTypes.string,
};

TinyLineChart.defaultProps = {
  data: [],
  width: "100%",
  height: 100,
  strokeWidth: 2,
  strokeColor: "primary.main",
  dot: false,
  dataKey: "value",
  type: "monotone",
};

TinyLineChart.displayName = "TinyLineChart";

export default TinyLineChart;
