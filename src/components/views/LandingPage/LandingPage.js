import React, {useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

    useEffect(() => {
        axios.get('http://localhost:5001/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            console.log(response);
            if(response.data.success) {
                props.history.push('/login');
            } else {
                alert('error')
            }
        })
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
        }}>
            시작 페이지
            <button onClick={ onClickHandler }>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)