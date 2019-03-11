import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames'; 

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

export class Launch extends Component {
  render() {
      let { flight_number } = this.props.match.params;
      flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables= {{flight_number}}>
            {
                ({ loading, error, data  }) => {
                    if(loading) return <h4>Chargement...</h4>
                    if (error) return <h2>Erreur pendant le chargement de le page, merci de patienter et de recharger la page.</h2>
                    
                    const { 
                        mission_name,
                        flight_number,
                        launch_year,
                        launch_success,
                        rocket :
                            {rocket_id, rocket_name, rocket_type}
                        } = data.launch;

                    return <div>
                        <h1 className="display-4 my-3">
                            <span className="text-dark">Mission : </span> {mission_name}
                        </h1>
                        <h4 className='mb-3'>Launch Details</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Numéro de vol : {flight_number}</li>
                            <li className="list-group-item">Année : {launch_year}</li>
                            <li className="list-group-item">Numéro de vol : {flight_number}</li>
                            <li className="list-group-item">Vol réussi ? : 
                                <span className={classNames({
                                    'text-success' : launch_success,
                                    'text-danger' : !launch_success
                                })}>{launch_success ? 'Oui' : 'Non'}
                                </span>
                            </li>
                        </ul>   
                        <h4 className='my-3'>Rocket Details</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Numéro de Roquette: {rocket_id}</li>
                            <li className="list-group-item">Nom de la Roquette : {rocket_name}</li>
                            <li className="list-group-item">Type de Rocket : {rocket_type}</li>
                        </ul>
                        <hr/>
                        <Link to="/" className='btn btn-secondary'>Retour</Link>
                    </div>
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
