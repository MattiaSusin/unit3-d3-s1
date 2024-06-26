import { Alert, AlertHeading } from "react-bootstrap";

const MyAlert = props => (
    <Alert className="ms-5 me-5">
        <AlertHeading className="fw-bold fs-2 text-danger">Benvenuto nel nostro Book Shop</AlertHeading>
        <p className="fw-bold fs-4 text-danger">Buona Lettura</p>
    </Alert>
) 
export default MyAlert;