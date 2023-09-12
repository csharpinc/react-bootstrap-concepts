import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const TooltipExample = () => {
  const ButtonTooltip = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <Button>{children}</Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <h1>React Bootstrap Tooltip Example</h1>
      <ButtonTooltip title="Default title" id="t-1">
        Lorem Ipsum
      </ButtonTooltip>{" "}
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the{" "}
      <ButtonTooltip title="industry's standard tooltip" id="t-2">
        industry's standard{" "}
      </ButtonTooltip>{" "}
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has{" "}
      <ButtonTooltip title="Add any text for survided button" id="t-3">
        survived
      </ButtonTooltip>{" "}
      not only five centuries , but also the leap into electronic typesetting,
      remaining essentially unchanged. It was{" "}
      <ButtonTooltip title="You can add any text here" id="t-4">
        popularised in the 1960s
      </ButtonTooltip>{" "}
      with the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of{" "}
      <ButtonTooltip title="Last tooltip" id="t-5">
        Lorem Ipsum.
      </ButtonTooltip>
    </div>
  );
};

export default TooltipExample;
