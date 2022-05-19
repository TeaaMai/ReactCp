import React  from "react";
import axios from "axios";
import react, { useState } from "react";
import Select from 'react-select'

function getDatos(){
    const [cp, setCp] = useState()

    const colonia = []
    const estado = []
    const municipio = []

    const getCP = async () =>{
        
        try {
            let formData = new FormData();
            formData.append("cp", cp);
            const url = "http://api.masksoftco.mx/direcciones/codigo-postal";

            let result = await axios({
                url,
                method: 'POST',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            if(result.data){
                let objectRes = result.data;
                for(let i=0; i<objectRes.length; i++){
                    console.log(objectRes[i].colonia); 
                    colonia [i]= {value:objectRes[i].colonia, label:objectRes[i].colonia}
                } 
                estado[0] = {value: objectRes[0].estado, label: objectRes[0].estado}
                municipio[0] = {value: objectRes[0].municipio, label: objectRes[0].municipio}

            }else{
                console.log("ERROR");
            }


            console.log(result)
            console.log(result.data)
            


           // return (res.data ? res.data : false);
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <label>Codigo Postal: </label>
            <input type='number' maxLength="5" value={cp} onChange={(e) => setCp(e.target.value)}/>
            <br/>
            <label>ESTADO:</label>
            <Select options = {estado}/>
            <label>MUNICIPIO:</label>
            <Select options = {municipio}/>
            <label>COLONIA:</label>
            <Select options = {colonia}/>
            <br/>
            <button onClick={getCP}>Obtener</button>
            <label>Estado: </label>
        </div>
    );
}

export default getDatos;