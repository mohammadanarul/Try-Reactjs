// import React, { Component } from 'react';
// import {Container, Form, Row, Col, Button} from 'react-bootstrap'
// class PostForm extends Component {
//     state = {
//         title: '',
//         description: '',
//         category: '',
//         tags: [],
//     }
//     changeHandler = event =>{
//         console.log(event.target.name)
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     submitForm = event =>{
//         console.log(this.state)
//     }
//     render() {
//         const {title, description, category, tags} = this.state
//         return (
//             <Container className="mt-5">
//                 <Row>
//                     <Col md="6" className="m-auto">
//                     <Form>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                             <Form.Control onChange={this.changeHandler} value={title} type="text" name="title" placeholder="title" />
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Control onChange={this.changeHandler} value={description} as="textarea" name="description" placeholder="descriptions" rows={3} />
//                         </Form.Group>
//                         <Form.Select onChange={this.changeHandler} value={category} className="mb-3" name="category">
//                             <option>select category</option>
//                             <option>Python</option>
//                             <option>Javascript</option>
//                             <option>web development</option>
//                             <option>Java</option>
//                         </Form.Select>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Control onChange={this.changeHandler} value={tags} type="text" name="tags" placeholder="posts tags" />
//                         </Form.Group>
//                         <Button variant="primary" onClick={this.submitForm}>Submit</Button>
//                     </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default PostForm;