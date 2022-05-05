import Spinner from 'react-bootstrap/Spinner';

let FederatedLogin = (props) => {
    return(
        <>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

        </>
    );
}