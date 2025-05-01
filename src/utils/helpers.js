import Highcharts from "highcharts";
import patternFill from "highcharts/modules/pattern-fill";
import { COLORS } from "../enums";

patternFill(Highcharts);

export const resolvePath = (pObject, pPathString, pDefaultValue) => {
  return pPathString.split(".").reduce((pObject, pKey) => {
    if (pObject && pObject[pKey]) {
      return pObject[pKey];
    }
    return pDefaultValue;
  }, pObject);
};

export const getColor = (pPathString) => {
  const xStrSize = pPathString.split(".").length;

  if (xStrSize < 2) {
    return COLORS.common.black;
  }

  return resolvePath(COLORS, pPathString, COLORS.error.main);
};

// Função para gerar padrões dinâmicos
const createPattern = (
  pConfig = {
    id: "ptr",
    type: "stripes",
    colors: ["#FF0000", "#FFFFFF"],
    options: {},
  },
  pHighcharts = Highcharts
) => {
  console.log(pConfig);

  if (!pHighcharts) {
    console.error(
      "Highcharts não está definido ou não foi passado como parâmetro."
    );
    return;
  }

  const baseConfig = {
    id: pConfig.id,
    color: pConfig.colors[0],
    width: pConfig.options.width || 6,
    height: pConfig.options.height || 6,
  };

  const patterns = {
    stripes: {
      path: {
        d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
        strokeWidth: pConfig.options.strokeWidth || 2,
      },
    },
    dots: {
      type: "circle",
      radius: 2,
      spacing: 5,
      backgroundColor: pConfig.colors[1] || "#FFFFFF",
    },
    zigzag: {
      path: {
        d: "M 0 10 L 5 0 L 10 10 L 15 0 L 20 10",
        strokeWidth: pConfig.options.strokeWidth || 2,
      },
    },
  };

  Highcharts.addPattern({ ...baseConfig, ...patterns[pConfig.type] });
};

// Gerando padrões dinamicamente
const generatePatterns = (data) => {
  data.forEach((item, index) => {
    const patternTypes = ["stripes", "dots", "zigzag"];
    const randomPatternType =
      patternTypes[Math.floor(Math.random() * patternTypes.length)];
    createPattern({
      id: `pattern-${index}`,
      type: randomPatternType,
      colors: [item.color || "#000000", "#FFFFFF"], // Cor principal + fundo
      options: { width: 8, height: 8 },
    });
  });
};

export default { resolvePath, getColor, createPattern, generatePatterns };
