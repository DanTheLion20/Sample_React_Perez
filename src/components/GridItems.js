import {Button, Card} from 'react-bootstrap';

const GridItems = (props) => {
    return ( 
        <>
          <div className="col-4">
                    <Card className="my-3">
                        <Card.Img variant="top" src={props.imageFile}/>
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                {props.CardText}       
                                </Card.Text>
                                    <Button variant="warning">Learn More</Button>
                            </Card.Body>
                    </Card>
                </div>
        </>
     );
}
 
export default GridItems;