import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
const SignIn = ({
    txtCorreoValue,
    txtPasswordValue,
    onChange: onChangeHandler,
    errorTxtCorreo,
    errorPassword,
    onConfirmClick,
    onCancelClick }) => {
    return (
        <Page header={(<h2>&nbsp;¡Bienvenido al Hotel React!</h2>)}>
            <section>
                <section className="texto">
                    <h3>Crear una nueva cuenta</h3>
                    <h4>Ingrese la información a continuación para configurar una cuenta</h4>
                </section>
                <Input
                    label="Correo Electrónico"
                    type="text"
                    name="txtCorreo"
                    placeholder="Ingrese su Correo Electrónico..."
                    value={txtCorreoValue}
                    error={errorTxtCorreo}
                    onChange={onChangeHandler}
                />
                <Input
                    label="Contraseña"
                    type="password"
                    name="txtPassword"
                    placeholder="Ingrese una contraseña..."
                    value={txtPasswordValue}
                    info="Mínimo 8 caractéres, una Mayuscula, una minuscula, un numero y un simbolo"
                    error={errorPassword}
                    onChange={onChangeHandler}
                />
                <PrimaryButton onClick={onConfirmClick}>
                    Crear Cuenta
                </PrimaryButton>
                <SecondaryButton onClick={onCancelClick}>
                    Tengo Cuenta
                </SecondaryButton>


            </section>
        </Page>
    );
}

export default SignIn;