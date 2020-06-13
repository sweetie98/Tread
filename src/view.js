import React from "react";
import { Card, Image } from "semantic-ui-react";

import "./modal.css";

const Viewcall = props => {
  return (
    <div>
      <Card>
        <Image className="view" src={props.data.link} size="mini" />
        <Card.Content>
          <Card.Header>
            <b>{props.data.personName}</b>
          </Card.Header>
          <Card.Meta>
            <span className="reps"> {props.data.i} reps</span>
          </Card.Meta>
          <Card.Meta>
            <span className="time">{props.data.j} sec</span>
          </Card.Meta>
          <Card.Meta>
            <span className="rests">{props.data.k} (s)rest</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Viewcall;
