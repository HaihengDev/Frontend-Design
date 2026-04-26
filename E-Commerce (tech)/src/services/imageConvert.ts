export const imageConvert = (imgUrl: string) => {
  return new URL(`${imgUrl}`, import.meta.url).href;
};
