import React, { forwardRef } from "react";
import Highcharts from "highcharts/highstock";
import { HighchartsReact as HCR } from "highcharts-react-official";

const HighstocksReact = forwardRef((props, ref) => {
  const { options, ...restProps } = props;

  const lang = {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    shortMonths: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ],
    numericSymbols: ["mil", "mi", "bi", "tri", "quad", "quin"],
  };

  Highcharts.theme = {
    colors: [
      "#00dfa8",
      "#f1b40f",
      "#058DC7",
      "#50B432",
      "#ED561B",
      "#DDDF00",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4",
    ],
    chart: {
      backgroundColor: "transparent",
    },
    title: {
      style: {
        color: "#fff",
        font: 'bold 16px "Montserrat", sans-serif',
      },
    },
    subtitle: {
      style: {
        color: "#fff",
        font: 'bold 16px "Montserrat", sans-serif',
      },
    },
    xAxis: {
      gridLineColor: "#7a81ab",
      gridLineDashStyle: "ShortDot",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#7a81ab",
      minorGridLineColor: "#7a81ab",
      minorGridLineDashStyle: "ShortDot",
      tickColor: "#7a81ab",
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    yAxis: {
      gridLineColor: "#7a81ab",
      gridLineDashStyle: "ShortDot",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#7a81ab",
      minorGridLineColor: "#7a81ab",
      minorGridLineDashStyle: "ShortDot",
      tickColor: "#7a81ab",
      tickWidth: 1,
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    legend: {
      itemStyle: {
        color: "#fff",
        fontFamily: '"Montserrat", sans-serif',
      },
      itemHoverStyle: {
        color: "#fff",
      },
    },
    plotOptions: {
      bar: {
        borderWidth: 0,
      },
      column: {
        borderWidth: 0,
      },
    },
  };

  Highcharts.setOptions(Highcharts.theme);
  Highcharts.setOptions({ lang });

  return (
    <HCR
      ref={ref}
      highcharts={Highcharts}
      constructorType={"stockChart"}
      {...restProps}
      options={{
        rangeSelector: {
          selected: 1,
        },
        ...options,
        credits: { enabled: false },
      }}
    />
  );
});

export default HighstocksReact;
