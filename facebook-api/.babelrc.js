module.exports = (v1) => {
  v1.cache(true);

  const presets = [
    "@babel/preset-env",
  ];

  return { presets };
}
