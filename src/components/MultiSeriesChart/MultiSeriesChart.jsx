import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  XAxis,
  ReferenceLine,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { validators, formats, dates } from "investira.sdk";
import { helpers } from "../../utils";

const MultiSeriesChart = memo((props) => {
  const dateFormatter = (date) => {
    return formats.formatDateCustom(new Date(date), "MMM YY");
  };

  // const xTicks = props.data.map((xData) => xData.data);
  // const endDate = new Date(xTicks.at(-1));
  // const domain = [(dataMin) => dataMin, () => endDate.getTime()];

  // const renderLegend = (props) => {
  //   const { payload } = props;

  //   return (
  //     <ul>
  //       {payload.map((entry, index) => (
  //         <li key={`item-${index}`}>{entry.value}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart
        width={600}
        height={props.height}
        data={props.data}
        margin={{ right: 18, left: 18, top: 16 }}
      >
        <Tooltip
          formatter={(value, name, props) => {
            const xName = props.payload.metadata[name];
            const xValue = formats.friendlyNumber(value, 2, true);
            return [xValue, xName, props];
          }}
          labelFormatter={(pValue) => {
            const xDate = dates.toDate(pValue);
            return formats.formatDateCustom(xDate, "MMMM YY");
          }}
          labelStyle={{
            textTransform: "capitalize",
            fontSize: "11px",
            color: helpers.getColor("text.primary"),
            marginBottom: "8px",
            fontWeight: 600,
          }}
          itemStyle={{ fontSize: "11px", padding: "2px 0" }}
          wrapperStyle={{}}
          contentStyle={{
            borderRadius: "8px",
            border: 0,
            backgroundColor: helpers.getColor("secondary.main"),
          }}
          active={true}
        />
        <YAxis
          type="number"
          domain={props.ydomain}
          hide={props.yAxisHide}
          includeHidden
          reversed={true}
        />
        <XAxis
          type="number"
          dataKey="data"
          domain={props.xdomain}
          hide={props.xAxisHide}
          scale="time"
          tickFormatter={dateFormatter}
          interval={0}
          includeHidden
          tick={{ fontSize: 11 }}
          ticks={props.xTicks}
          stroke={helpers.getColor("secondary.light")}
        />
        <CartesianGrid vertical={false} strokeOpacity={0.2} stroke="#7A81AB" />
        {props.dataKeys.map((xDataKey, xIndex) => {
          return (
            <Line
              key={xIndex}
              type={props.type}
              dataKey={xDataKey}
              // stroke={
              //   validators.isEmpty(props.strokeColors)
              //     ? helpers.getColor("primary.main")
              //     : helpers.getColor(props.strokeColors[xIndex])
              // }
              stroke={props.strokeColors[xIndex]}
              strokeWidth={props.strokeWidth}
              strokeDasharray={props.strokeDasharray[xIndex]}
              dot={props.dot}
            />
          );
        })}
        <Legend
          iconType="plainline"
          formatter={(value, entry, index) => {
            const { color } = entry;
            return (
              <span style={{ color, fontSize: "11px" }}>
                {props.legend[index]}
              </span>
            );
          }}
          wrapperStyle={{ left: 0, width: "100%" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
});

MultiSeriesChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeColors: PropTypes.array,
  strokeWidth: PropTypes.number,
  dot: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
    PropTypes.element,
  ]),
  dataKeys: PropTypes.array,
  type: PropTypes.string,
  margin: PropTypes.object,
  ydomain: PropTypes.array,
  xdomain: PropTypes.array,
  strokeDasharray: PropTypes.array,
  yAxisHide: PropTypes.bool,
  xAxisHide: PropTypes.bool,
};

MultiSeriesChart.defaultProps = {
  width: "100%",
  height: 100,
  strokeWidth: 2,
  strokeColors: ["primary.main"],
  dot: false,
  dataKeys: ["y"],
  type: "monotone",
  margin: { top: 5, right: 0, bottom: 5, left: 0 },
  ydomain: [0, "dataMax"],
  xdomain: [0, "dataMax"],
  strokeDasharray: ["0 0"],
  yAxisHide: true,
  xAxisHide: false,
};

MultiSeriesChart.displayName = "MultiSeriesChart";

export default MultiSeriesChart;
