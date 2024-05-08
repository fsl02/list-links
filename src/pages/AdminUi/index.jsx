import { useState } from "react";
import Form from "../../components/Form";
import Layout from "../Layout";
import storage from "../../storage";
import FormSection from "../../components/FormSection";

export default function AdminUi() {

    let savedUiStyle = storage.getUiStyle();
    let savedUiStyleHover = storage.getUiStyleHover();

    const [color, setColor] = useState(savedUiStyle.color ?? '#123456');
    const [textAlign, setTextAlign] = useState(savedUiStyle.textAlign ?? 'center');
    const [fontSize, setFontSize] = useState(parseFloat(savedUiStyle.fontSize ?? 16));
    const [backgroundColor, setBackgroundColor] = useState(savedUiStyle.backgroundColor ?? '#ffffff');
    const [borderColor, setBorderColor] = useState(savedUiStyle.borderColor ?? '#000000');
    const [borderWidth, setBorderWidth] = useState(parseFloat(savedUiStyle.borderWidth ?? 0));
    const [borderRadius, setBorderRadius] = useState(parseFloat(savedUiStyle.borderRadius ?? 0));
    const [alert, setAlert] = useState();

    const [styleHover, setStyleHover] = useState({
        color: savedUiStyleHover.color,
        borderColor: savedUiStyleHover.borderColor,
        backgroundColor: savedUiStyleHover.backgroundColor
    });

    const submitHandle = (event) => {
        event.preventDefault();

        storage.setUiStyleHover(styleHover)

        let uiStyle = {
            color,
            textAlign,
            fontSize: `${fontSize}px`,
            backgroundColor,
            borderColor,
            borderWidth: `${borderWidth}px`,
            borderRadius: `${borderRadius}px`
        }

        storage.setUiStyle(uiStyle);

        setAlert({
            show: true,
            msg: "Ui salvo com sucesso!",
            status: 'success'
        })

        setTimeout(() => {
            setAlert({show: false})
        }, 2000)
    }


    return (
        <Layout title="User interface">
            <Form submitHandle={submitHandle} alertState={alert}>
                <FormSection title="Texto e cor de fundo"> 
                    <div className="col">
                        <label className="form-label">Cor</label>
                        <input type="color" value={color} className="form-control form-control-color w-100" onChange={event => setColor(event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor de fundo</label>
                        <input type="color" value={backgroundColor} className="form-control form-control-color w-100" onChange={event => setBackgroundColor(event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Alinhamento</label>
                        <select className="form-select" value={textAlign} onChange={event => setTextAlign(event.target.value)}>
                            <option>left</option>
                            <option>center</option>
                            <option>right</option>
                        </select>
                    </div>
                    <div className="col">
                        <label className="form-label">Tamanho ({fontSize}px)</label>
                        <input className="form-range" value={fontSize} type="range" min="12" max="32" step="1" onChange={event => setFontSize(event.target.value)} />
                    </div>
                </FormSection>
                <FormSection title="Borda"> 
                    <div className="col">
                        <label className="form-label">Cor</label>
                        <input type="color" value={borderColor} className="form-control form-control-color w-100" onChange={event => setBorderColor(event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Tamanho ({borderWidth}px)</label>
                        <input className="form-range" value={borderWidth} type="range" min="0" max="5" step="1" onChange={event => setBorderWidth(event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Arredondamento ({borderRadius}px)</label>
                        <input className="form-range" value={borderRadius} type="range" min="0" max="100" step="1" onChange={event => setBorderRadius(event.target.value)} />
                    </div>
                </FormSection>
                <FormSection title="Hover"> 
                    <div className="col">
                        <label className="form-label">Cor do texto</label>
                        <input type="color" value={styleHover.color} 
                            onChange={event => setStyleHover({...styleHover, color: event.target.value})}
                            className="form-control form-control-color w-100" />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor de fundo</label>
                        <input type="color" value={styleHover.backgroundColor} 
                            onChange={event => setStyleHover({...styleHover, backgroundColor: event.target.value})}
                            className="form-control form-control-color w-100" />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor da borda</label>
                        <input type="color" value={styleHover.borderColor} 
                            onChange={event => setStyleHover({...styleHover, borderColor: event.target.value})}
                            className="form-control form-control-color w-100" />
                    </div>
                </FormSection>
                <div className="row">
                    <button className="btn btn-dark">Salvar</button>
                </div>
            </Form>
        </Layout>
    )
}