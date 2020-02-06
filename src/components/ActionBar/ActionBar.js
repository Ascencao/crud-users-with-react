import React from "react";

// Bootstrap
import { ButtonToolbar, Button } from "react-bootstrap";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faTrashAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

import "./ActionBar.css";

library.add(fab, faEdit, faTrashAlt, faSearch);

function ActionBar(props) {
  // const users = props.users;
  return (
    <React.Fragment>
      <ButtonToolbar className="d-flex justify-content-around">
        <Button variant="outline-primary" size="sm" disabled>
          <span>
            <FontAwesomeIcon icon="search" />
          </span>
        </Button>
        <Button variant="outline-primary" size="sm" disabled>
          <span>
            <FontAwesomeIcon icon="edit" />
          </span>
        </Button>
        <Button variant="outline-primary" size="sm" disabled>
          <span>
            <FontAwesomeIcon icon="trash-alt" />
          </span>
        </Button>
      </ButtonToolbar>
    </React.Fragment>
  );
}

export default ActionBar;
