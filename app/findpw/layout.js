export default function FindPwLayout({ children }) {
  return (
    <>
      <div className="flex gap-5 w-full border-b-[1px] border-b-slate-200">
        <div className="flex-1  rounded-md p-2">
          <span>이메일 찾기</span>
        </div>

        <div className="flex-1  rounded-md p-2">
          <span>비밀번호 찾기</span>
        </div>
      </div>

      {children}
    </>
  );
}
