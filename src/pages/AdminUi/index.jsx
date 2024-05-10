import { useEffect, useState } from "react";
import Form from "../../components/Form";
import Layout from "../Layout";
import storage from "../../storage";
import FormSection from "../../components/FormSection";
import LinkItem from "../../components/LinkItem";
import ListLinks from "../../components/ListLinks";
import { UiThemeProvider } from "../../context/FormContext";

export default function AdminUi() {

    let savedUiStyle = storage.getUiStyle();
    let savedUiStyleHover = storage.getUiStyleHover();

    const [alert, setAlert] = useState();

    const [uiStyle, setUiStyle] = useState({
        color: savedUiStyle.color ?? '#123456',
        textAlign: savedUiStyle.textAlign ?? 'center',
        fontSize: `${savedUiStyle.fontSize ?? '16px'}`,
        backgroundColor: savedUiStyle.backgroundColor ?? '#ffffff',
        borderColor: savedUiStyle.borderColor ?? '#000000',
        borderWidth: savedUiStyle.borderWidth ?? 0,
        borderRadius: savedUiStyle.borderRadius ?? 0
    });

    const [styleHover, setStyleHover] = useState({
        color: savedUiStyleHover.color,
        borderColor: savedUiStyleHover.borderColor,
        backgroundColor: savedUiStyleHover.backgroundColor
    });

    const [uiStyleLive, setUiStyleLive] = useState(uiStyle);

    useEffect(() => {
        setUiStyleLive(uiStyle);
    }, [uiStyle])


    const submitHandle = (event) => {
        event.preventDefault();

        storage.setUiStyleHover(styleHover)

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
            <UiThemeProvider uiStyleData={{uiStyleLive, styleHover}}>
                <div className="row">

                    <Form submitHandle={submitHandle} alertState={alert} className="col-7">
                        <FormSection title="Texto e cor de fundo"> 
                            <div className="col">
                                <label className="form-label">Cor</label>
                                <input type="color" value={uiStyle.color} 
                                    className="form-control form-control-color w-100" 
                                    onChange={event => setUiStyle({...uiStyle, color: event.target.value})} />
                            </div>
                            <div className="col">
                                <label className="form-label">Cor de fundo</label>
                                <input type="color" value={uiStyle.backgroundColor} 
                                    className="form-control form-control-color w-100" 
                                    onChange={event => setUiStyle({...uiStyle, backgroundColor: event.target.value})} />
                            </div>
                            <div className="col">
                                <label className="form-label">Alinhamento</label>
                                <select className="form-select" value={uiStyle.textAlign} 
                                    onChange={event => setUiStyle({...uiStyle, textAlign: event.target.value})}>
                                    <option>left</option>
                                    <option>center</option>
                                    <option>right</option>
                                </select>
                            </div>
                            <div className="col">
                                <label className="form-label">Tamanho ({uiStyle.fontSize})</label>
                                {/*<input className="form-range" value={fontSize} type="range" min="12" max="32" step="1" onChange={event => setFontSize(event.target.value)} />*/}
                                <input className="form-range" value={parseFloat(uiStyle.fontSize)} 
                                    type="range" min="12" max="32" step="1" 
                                    onChange={event => setUiStyle({...uiStyle, fontSize: `${event.target.value}px`})} />
                            </div>
                        </FormSection>
                        <FormSection title="Borda"> 
                            <div className="col">
                                <label className="form-label">Cor</label>
                                <input type="color" value={uiStyle.borderColor} 
                                    className="form-control form-control-color w-100" 
                                    onChange={event => setUiStyle({...uiStyle, borderColor: event.target.value})} />
                            </div>
                            <div className="col">
                                <label className="form-label">Tamanho ({uiStyle.borderWidth})</label>
                                <input className="form-range" value={parseFloat(uiStyle.borderWidth)} 
                                    type="range" min="0" max="5" step="1" 
                                    onChange={event => setUiStyle({...uiStyle, borderWidth: `${event.target.value}px`})} />
                            </div>
                            <div className="col">
                                <label className="form-label">Arredondamento ({uiStyle.borderRadius})</label>
                                <input className="form-range" value={parseFloat(uiStyle.borderRadius)} 
                                    type="range" min="0" max="100" step="1" 
                                    onChange={event => setUiStyle({...uiStyle, borderRadius: `${event.target.value}px`})} />
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
                
                    <div className="col-5 mt-4 border h-25 text-center ">
                        <h5>Preview</h5>
                        <ListLinks links={[{linkText: "Botão de exemplo"}]} />
                    </div>
                </div>
            </UiThemeProvider>

        </Layout>
    )
}