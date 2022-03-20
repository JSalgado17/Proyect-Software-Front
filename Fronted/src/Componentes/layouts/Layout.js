import Navegacion from "../Navegacion";

export default function Layout({ children }) {
    return(
        <>
        <Navegacion />
       {children}
        </>
    )
}