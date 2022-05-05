import Spinner from 'react-bootstrap/Spinner';
import {useEffect} from 'react';
import apiAccess from '../communication/APIAccess';
import { useParams } from 'react-router-dom';

let FederatedLogin = (props) => {
    const {username, name} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        apiAccess.isLoggedIn()
        .then(x => {
            if(x) {
                props.customerLoggedIn(username);
                navigate('/');
            } else {
                alert('Something went wrong.');
                navigate('/');
            }
        })
    }, []);
    return(
        <>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

        </>
    );
}

export default FederatedLogin;