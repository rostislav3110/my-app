const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../assets", true, /\.(png|jpeg|svg|jpg)$/));

export default images;