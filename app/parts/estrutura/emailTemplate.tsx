interface EmailTemplateProps {
    nome: string;
    email: string;
    telefone: string;
}

export function EmailTemplate(body: EmailTemplateProps) {
    return (
        <div>
            <h1>Contato - Site - Daiane Luna</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.telefone}!</p>
        </div>
    )
};