import React,{useState, useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function Login(props) {

	//1. 상태변수 선언
	const [form, setForm] = useState({
		username:'',
		password:''
	});

	const [error, setError] = useState('');
	const navigate = useNavigate();

	// 이미 로그인 상태면 메인 이동
	useEffect(()=>{
		if(localStorage.getItem('token')){
			navigate('/');
		}
	},[navigate]);

	// 2. 입력시 실행되는 함수
	const handleChange=(e)=>{
		setForm({
			...form,
			[e.target.name]:e.target.value
		});
		setError('');
	}

	// 3. 로그인 버튼 클릭 시 실행되는 함수
	const handleSubmit = (e) =>{
		e.preventDefault();

		axios.post('http://localhost:9070/login',form)
		.then(res=>{
			console.log('서버가 준 데이터', res.data)
			// jwt 토큰 저장
			localStorage.setItem('token', res.data.token);

			alert('로그인 성공');
			navigate('/')
		})
		.catch(()=>{
			setError('로그인 실패 : 아이디 또는 비밀번호를 확인하세요.');
		});
	}

	

	return (
		<main>
			<section>
				<h2>로그인</h2>

				<form onSubmit={handleSubmit}>
					<p>
						<label htmlFor='username'>아이디 : </label>
						<input type='text'
						id='username'
						name='username'
						placeholder='아이디'
						onChange={handleChange}
						value={form.username}
						required
						/>
					</p>
					<p>
						<label htmlFor='password'>비밀번호 : </label>
						<input type='password'
						id='password'
						name='password'
						placeholder='비밀번호'
						onChange={handleChange}
						value={form.password}
						required
						/>
					</p>
					<button type='submit' value='로그인'>
						로그인
					</button>
					<p className='btn-group'>
						<Link to='/id_search'>아이디 찾기</Link>&#10072;
						<Link to='/pw_search'>비밀번호 찾기</Link>&#10072;
						<Link to='/register'>회원가입</Link>
					</p>
					{error&&<p style={{color:'red'}}>{error}</p>}
				</form>
			</section>
		</main>
	);
}

export default Login;