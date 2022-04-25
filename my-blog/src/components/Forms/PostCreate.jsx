import React, { Component } from 'react';
import {Button, Modal, Form } from 'react-bootstrap'

class PostCreate extends Component {
    state = {
      title: '',
      description: '',
      category: '',
      tags: [],
      show: false,
  }
    changeHandler = event =>{
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = event =>{
        console.log(this.state)
    }
    handleClose = event => {
        this.state.show = false
    }
    handleShow = event => {
        this.state.show = true
    }
    render() {
      const {title, description, category, tags, show} = this.state
        return (
            <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={this.changeHandler} value={title} type="text" name="title" placeholder="title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={this.changeHandler} value={description} as="textarea" name="description" placeholder="descriptions" rows={3} />
                </Form.Group>
                <Form.Select onChange={this.changeHandler} value={category} className="mb-3" name="category">
                    <option>select category</option>
                    <option>Python</option>
                    <option>Javascript</option>
                    <option>web development</option>
                    <option>Java</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={this.changeHandler} value={tags} type="text" name="tags" placeholder="posts tags" />
                </Form.Group>
                <Button variant="primary" onClick={this.submitForm}>Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        );
    }
}

export default PostCreate;