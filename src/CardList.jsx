import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    const cardComponent = robots.map((user, i) => {
        return (
        <Card key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        /> )
    });

    return (
    <Fragment>
        { cardComponent }
    </Fragment>
    );

    // return (
    //     <Fragment>
    //         { robots.map((user, i) => {
    //             return (
    //                 <Card key={robots[i].id} 
    //                     id={robots[i].id} 
    //                     name={robots[i].name} 
    //                     email={robots[i].email}
    //                 /> );
    //             }) 
    //         }
    //     </Fragment>
    // );
}

export default CardList;