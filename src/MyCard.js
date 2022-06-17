import React from "react";
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={details.picture?.large}/> {/* sometimes you need to use the ? there */}
                <CardTitle className="text-primary">
                    <h1>
                        <span className="p-1">{details.name?.title}</span>
                        <span className="p-1">{details.name?.first}</span>
                        <span className="p-1">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <p>
                        <FaMapMarkedAlt className="m-2"/>
                        {details.location?.city}
                        <FaEnvelope className="m-2"/>
                        {details.email}
                    </p>
                    <p>
                        <FaPhone className="m-2"/>
                        {details.phone}
                        <span className="m-2"><strong>Age: </strong>{details.dob?.age}</span>
                    </p>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;