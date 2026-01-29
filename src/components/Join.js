import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Join(props) {
	// 1. 변수선언
	const [form, setForm] = useState({
		username:'', //아이디
		password:'', //패스워드
		password2:'', //패스워드2
		email:'', 
		tel:''
	});
	// 회원가입 실패하는 경우 에러 출력하기
	const [error,setError] = useState(false);
	const [message, setMessage] = useState('');
	//url 주소관리
	const navigate = useNavigate();

	//2. input 입력한 값 저장하기
	const handleChange = (e) =>{
		setForm({
			...form,
			[e.target.name]:e.target.value
		});

		// 데이터값 없는 경우
		setError(''); //에러 초기화
	}

	// 3. 아이디 중복체크 기능
	const checkUsername=()=>{
		axios.post('http://localhost:9070/check-username',{
			username:form.username
		})
		.then(res=>{
			if(res.data.exists){
				setError(true);
				setMessage('이미 사용중인 아이디입니다');
			}else{
				setError(false);
				setMessage('사용 가능한 아이디입니다.');
			}
		});
	};

	// 회원가입 버튼 클릭시 해당 값들을 서버축으로 전송함
	const handleSubmit=(e)=>{
		// 사용자가 입력한 데이터를 back서버에 post방식으로 전송
		e.preventDefault();

		// 비밀번호와 비밀번호2 일치가 되는지 확인
		if(form.password !== form.password2){
			setMessage('비밀번호가 일치하지 않습니다.')
			setError(true);
			return;
		}
		// 비밀번호 일치시 서버측으로 내용전송
		axios.post('http://localhost:9070/register',form)
		.then(()=>{ //전송 성공시
			alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다')
			navigate('/login'); //로그인 경로주소
		})
		.catch( //실패시
			err=>{
				console.log(err);
				setError('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류입니다.')
			}
		)
	}



	return (
		<main>
			<section>
				<h2>회원가입</h2>
				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor='username'>아이디 : </label>
						<input type='text'
						id='username'
						name='username'
						placeholder='아이디를 입력해주세요.'
						value={form.username}
						onChange={handleChange}
						required/>
						<button type='button' onClick={checkUsername}>중복확인</button>
					</p>
					<p>
						<label htmlFor='password'>패스워드 : </label>
						<input type='password'
						id='password'
						name='password'
						placeholder='패스워드를 입력해'
						value={form.password}
						onChange={handleChange}
						required/>
					</p>
					<p>
						<label htmlFor='password'>패스워드 확인 : </label>
						<input type='password'
						id='password2'
						name='password2'
						placeholder='패스워드 확인'
						value={form.password2}
						onChange={handleChange}
						required
						/>
					</p>
					<p>
						<label htmlFor='email'>이메일 주소 : </label>
						<input type='email'
						id='email'
						name='email'
						placeholder='id@domain.co.kr'
						value={form.email}
						onChange={handleChange}
						required/>
					</p>
					<p>
						<label htmlFor='tel'>전화번호 : </label>
						<input type='tel'
						id='tel'
						name='tel'
						placeholder='000-0000-0000'
						value={form.tel}
						onChange={handleChange}
						required/>
					</p>
					<p>
						<input type='checkbox' required id='agree'/>
						<label htmlFor='agree'>이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.</label>	
					</p>
					<p>
						<button type='submit'>회원가입</button>
					</p>
					{/* 회원가입 실패시 나오는 문구 */}
					{/* {error&&<p style={{color:'#f00'}}>{error}</p>} */}
					{error?<p style={{color:'red'}}>{message}</p>:<p style={{color:'blue'}}>{message}</p>}
				</form>
			</section>
		</main>
	);
}

export default Join;