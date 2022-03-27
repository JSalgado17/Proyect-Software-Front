import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
const Login = ({
    txtCorreoValue,
    txtPasswordValue,
    onChange: onChangeHandler,
    errorTxtCorreo,
    errorPassword,
    onConfirmClick,
    onCancelClick
}) => {
    return (
        <Page header={(<h2>&nbsp;Iniciar Sesión</h2>)}>
            <section>
                <Input
                    label="Correo Electrónico"
                    type="text"
                    name="txtCorreo"
                    placeholder="Su Correo Electrónico"
                    value={txtCorreoValue}
                    error={errorTxtCorreo}
                    onChange={onChangeHandler}
                />
                <Input
                    label="Contraseña"
                    type="password"
                    name="txtPassword"
                    placeholder="Contraseña"
                    value={txtPasswordValue}
                    info="Mínimo 8 caractéres, una Mayuscula, una minuscula, un numero y un simbolo"
                    error={errorPassword}
                    hasError={!!(errorPassword && true)}
                    onChange={onChangeHandler}
                />
                <PrimaryButton onClick={onConfirmClick}>
                    Iniciar Sesión
                </PrimaryButton>
            </section>
        </Page>
    );
}

export default Login;