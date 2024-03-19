export const isNotNumber = () => {
  const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  return regExp.test(value);
};

export const isNotKorean = () => {
  const regExp = /[a-z|A-Z|0-9]/g;
  return regExp.test(value);
};
