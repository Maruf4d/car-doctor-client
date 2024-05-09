import { useEffect, useState } from "react";


const Services = () => {
    const [services , setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        });
    },[])
    console.log(services);
    return (
        <div>
            <div>
                {
                    services.map()
                }
            </div>
        </div>
    );
};

export default Services;