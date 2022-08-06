import Form from "./styles";

const Formulary = ({onSubmit, children}) => (
  <Form onSubmit={onSubmit}>
    {children}
  </Form>
);

export default Formulary;
