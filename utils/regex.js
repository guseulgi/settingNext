export const isNotNumber = (value) => {
  const regExp = /[a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  return regExp.test(value);
};

export const isKorean = (value) => {
  const regExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
  return regExp.test(value);
};
