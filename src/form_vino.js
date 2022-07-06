import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Fieldset } from 'primereact/fieldset';

function FormularioVino() {

    const [bodega, setbodega] = useState('');
    const [uva, setUva] = useState('');
    const [denorigen, setDenorigen] = useState('');
    const [resultado, setResultado] = useState('');

    const modelo = {
        bodega: undefined,
        uva: undefined,
        denOrigen: undefined,
    }
    function handleSubmit(e) {
        e.preventDefault();
        modelo["Bodega"] = bodega;
        modelo["uva"] = uva;
        modelo["denorigen"] = denorigen;
        fetch("http://mariochack.pythonanywhere.com/predict", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(modelo)
        }).then((response) => response.json())
            .then((json) => setResultado(parseFloat(json.Prediction).toFixed(2)))
    }

    return (
        <div id="contenedor">
            <h2>Encuentra tu vino</h2>
            <form>
                <div id="contenedor-formulario">
                    <span className="p-float-label">
                        <InputText id="bodega" value={bodega} onChange={(e) => setbodega(e.target.value)} autoFocus />
                        <label htmlFor="bodega">Bodega</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="uva" value={uva} onChange={(e) => setUva(e.target.value)} />
                        <label htmlFor="uva">Uva</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="denominacion_origen" value={denorigen} onChange={(e) => setDenorigen(e.target.value)} />
                        <label htmlFor="denominacion_origen">Denominación de origen</label>
                    </span>
                    <Button id='submit' label="Buscar" onClick={handleSubmit} />



                </div>
            </form>
            <Fieldset className="resultado" id='resultado' legend="Resultado de la inverion en Marketing">
                <h1>
                    Resultado: {resultado} 
                </h1>

            </Fieldset>

        </div>
    );
}
export default FormularioVino