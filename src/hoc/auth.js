import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function Auth(SpecifiComponent, option, adminRoute = null) {

    //option
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 사람만 출입이 가능한 페이지
    //false => 로그인 안한 사람만 출입 가능한 페이지

    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                //로그인 한상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                } else {
                    //로그인 안한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if(option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [dispatch, props.history])

        return (
            <SpecifiComponent/>
        )

    }

    return AuthenticationCheck;
}