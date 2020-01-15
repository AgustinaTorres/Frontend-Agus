import React from 'react';
import { List } from 'semantic-ui-react'
import DoctorRating from '../DoctorRating/doctorRating';

const DoctorData = (props) => {
        return(
            <div className="ui card col-md-5" >

                <div className="row content text-center">

                    <div className="col-md-5">
                        <img width="100" height="100" alt="" src= {props.doctor.picture} className=" img-fluid ui left floated image" />
                    </div>

                    <div className="col-md-6 row justify-content-center">
                        <List>
                            <List.Item>
                            <List.Content className="header mb-1">{props.doctor.first_name + " "}{props.doctor.last_name}</List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Content><DoctorRating rate ={props.doctor.rate}/></List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Content className="mb-3">{props.doctor.spec_name}</List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>{props.doctor.time_zone}</List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                <a href='mailto:jack@semantic-ui.com'>{props.doctor.email}</a>
                            </List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Icon name='euro sign' />
                            <List.Content>{props.doctor.price} (valor de la consulta)</List.Content>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </div>
        )
    }

    export default DoctorData;
    