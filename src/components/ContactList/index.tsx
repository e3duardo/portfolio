import { ReactNode } from "react";

import { Container } from "./styles";

interface ContactListProps {
  children: ReactNode;
}

function ContactList({ children }: ContactListProps) {
  return <Container>{children}</Container>;
}

export default ContactList;
