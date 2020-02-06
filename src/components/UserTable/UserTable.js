import React from "react";

// Bootstrap
import { Container, Row, Col, Table } from "react-bootstrap";

//Components
import ActionBar from "../../components/ActionBar/ActionBar";

import "./UserTable.css";

function UserTable(props) {
  const users = props.users;
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover className="mt-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre Apellido</th>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Sitio Web</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>
                        <ActionBar />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UserTable;
