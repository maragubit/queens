import React from "react";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function CloseSession() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="mb-3 justify-content-end d-flex">
        <Button variant="danger" onClick={handleLogout}>
            Cerrar sesión
        </Button>
        </div>
    );
}
export default CloseSession;