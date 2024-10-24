export default function Header() {
  return (
    <header
    className="flex justify-between items-center py-[10px] px-[20px] bg-black">
      <h2 className="text-white">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px]">
        <li className="list-none font-normal text-white text-[13px]">로그인</li>
        <li className="list-none font-normal text-white text-[13px]">회원가입</li>
        <li className="list-none font-normal text-white text-[13px]">내클래스</li>
      </ul>
    </header>
  );
}
