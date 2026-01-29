import React from 'react';

function Footer(props) {
	return (
		<footer>
			<h4>공지사항</h4>
			<div className='footer_info'>
				<span>개인정보처리방침</span>
				<p>쇼핑몰약관</p>
				<img src={`${process.env.PUBLIC_URL}/images/footer_sns_2.gif`} alt='insta'/>
			</div>
			<div className='runTime'>
				<p>고객센터</p>
				<p>02-2166-7770</p>
				<p>평일 10:00~17:00</p>
				<p>(점심: 12:00~13:00)</p>
			</div>
			<p className='business'>지니펫 사업자 정보 확인</p>
		</footer>
	);
}

export default Footer;