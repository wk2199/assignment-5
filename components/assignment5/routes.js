import React from "react";

function Routes(props){
    const {projection, routes, selectedAirlineID} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (!selectedAirlineID) {
        return <g></g>;
    }

    const selectedRoutes = routes.filter(route => route.AirlineID === selectedAirlineID);

    const routeLines = selectedRoutes.map((route, index) => {
        const [x1, y1] = projection([route.SourceLongitude, route.SourceLatitude]);
        const [x2, y2] = projection([route.DestLongitude, route.DestLatitude]);

        return (
            <line
                key={`route-${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#992a5b"
                strokeWidth={0.5}
            />
        );
    });


    return <g>routeLines</g>
    
}

export { Routes }