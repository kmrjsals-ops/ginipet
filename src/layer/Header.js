import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Header(props) {
	// 1. 상태변경함수
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();

	//2. 로그인 여부
	const isLogin = !!localStorage.getItem('token');
	//!!(이중 not 연산자), 항상 boolean
	//조건부 렌더링, 삼항 연산자에 바로 사용 가능
	// true,false값을 명확한 boolean으로 변환하는 자바스크립트 관용 표현이다.

	//로컬 저장소에 있는 ID값을 변수에 저장
	const username = localStorage.getItem('username');

	// 3. 로그아웃
	const handleLogout=()=>{
		if(window.confirm('로그아웃 하시겠습니까?')){
			localStorage.removeItem('token');
			alert('로그아웃 되었습니다.');
			navigate('/login');
		}
	};
	
	return (
		<header className='header'>
			<h1>
				<Link to='/' title='메인페이지 바로가기'>
				<img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt='로고'/>
				</Link>
			</h1>
			<button className='toggle_btn' onClick={()=>setMenuOpen(true)}>
				<img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt='toggle'/>
			</button>

			<Link to='/cart' title='장바구니' className='cart_btn'>
				<img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt='cart'/>
			</Link>
			
			{/* 모바일 네비게이션 */}
			<nav className='navi'
			style={{left:menuOpen?'0%':'-100%'}}>
				<button className='close_btn' onClick={()=>setMenuOpen(false)}>
				<img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt='닫기'/>
			</button>


				<ul className='gnb'>
					<li className='member_info'>
						<b>{username}</b> 님 환영합니다.
					</li>
					<li><Link to='/'>지니펫 쇼핑몰</Link></li>
					<li><Link to='/intro'>브랜드 소개</Link></li>
					<li><Link to='/info'>반려견 정보</Link></li>
					<li><Link to='/event'>이벤트</Link></li>
					<li><Link to='/customer'>고객지원</Link></li>
				</ul>
				<ul className='form_navi'>
					{!isLogin?(
						<>
						<li><Link to='/login' onClick={()=>setMenuOpen(false)}>로그인</Link></li>
						<li><Link to='/join' onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
						</>
					):(
						<>
						<li><Link to='/' onClick={handleLogout}>로그아웃</Link></li>
						<li><Link to='/info'>회원정보수정</Link></li>
						<li><Link to='/order' onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
						</>
					)}
					<li><Link to='/cart' onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;