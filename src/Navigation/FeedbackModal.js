import React from 'react';
import { Modal, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import strings from '../_resources/Strings';

export const Feedback = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>{strings.label_feedback}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>{strings.label_feedbackTopic}</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="feature">{strings.select_feedbackFeature}</option>
                            <option value="bug">{strings.feedback_Bug}</option>
                            <option value="other">{strings.feedbackOther}</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>{strings.label_description}</ControlLabel>
                        <FormControl componentClass="textarea" placeholder={strings.label_descriptionDetail} />
                    </FormGroup>
                    <Button type="submit">{strings.action_feedbackSubmit} (does nothing)</Button>
                    <Button type="submit">{strings.action_close} (does nothing)</Button>
                </form>

            </Modal.Body>
        </Modal>
    )
}