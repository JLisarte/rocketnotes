import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut labore aut  ipsa necessitatibus quas id ullam, ratione non vero sit voluptates doloremque in magnam velit fuga quos itaque sapiente aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
