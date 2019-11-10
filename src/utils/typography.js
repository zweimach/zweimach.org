import Typography from "typography";
import Noriega from "typography-theme-noriega";

Noriega.baseFontSize = "20px";

const typography = new Typography(Noriega);

export const { scale, rhythm, options } = typography;
export default typography;
