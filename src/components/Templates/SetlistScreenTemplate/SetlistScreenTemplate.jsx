import React from 'react'
import Setlist from '../../Molecules/Setlist/Setlist';

const SetlistScreenTemplate = props => {
    return (<Setlist data={props.songs} secondary={true} dense={true}/>);
}

export default SetlistScreenTemplate;