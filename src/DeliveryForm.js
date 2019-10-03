import React, { useState } from 'react';


const DeliveryForm = () => {

    const [inputData, setInputData] = useState({name: "", email: "", phone: "", numberOfPackages: ""}); 
    const handleChange = (e) =>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <form >
                <label>
                    Nafn:<input type="text" name="name" value={inputData.name} onChange={handleChange}></input><br/>                   
                </label>
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={inputData.email} onChange={handleChange}></input><br/>
                
                <label htmlFor="number">Phone:</label>
                <input type="text" name="phone" id="number"></input><br/>

                <label htmlFor="numberOfPackages">Number Of Packages:</label>
                <input type="number" name="numberOfPackages" id="numberOfPackages"></input><br/>

                <input type="submit" value="Senda"/>
            </form>

        </div>
    )
}

// {
//     "senderOrderID": "77777777",
//     "description": "hhhhh",
//     "senderId": 9,
//     "numberOfPackages": 1,
//     "pickupAtDeliveryBranch": true,
//     "box": false,
//     "location": "hilla",
//     "recipient": { "email": "eee@eee.is",
//                     "phone": "7777777",
//                     "name": "Testari"
//                   }
//   }






export default DeliveryForm; 