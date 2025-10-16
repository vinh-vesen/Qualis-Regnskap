import React from "react";
import { StyledContainer } from "./Personvern.styled";

export const Personvern = () => {
  return (
    <StyledContainer>
      <h1>Personvernserklæring</h1>
      <section>
        <h2>Hvilke personopplysninger vi samler inn</h2>
        <p>
          Vi samler kun inn anonym informasjon for statistikk og bruksmønstre:
          <br />
          • Antall besøkende på nettsiden
          <br />
          • Klikk på telefonnummer, e-postlenke og lenke til sosiale medier
          <br />
          Dette gjøres for å forstå hvordan nettsiden brukes og forbedre
          brukeropplevelsen. Ingen personlig identifiserbar informasjon lagres.
        </p>
      </section>
      <section>
        <h2>Verktøy vi bruker</h2>
        <p>
          • <strong>Google Analytics 4</strong> Brukes til å telle besøk og
          spore klikk på telefonnummer, e-post og sosiale medier-lenke.
          Informasjonen er aggregert og kan ikke brukes til å identifisere
          enkeltpersoner <br />
          Google Analytics bruker informasjonskapsler (cookies). Disse aktiveres
          først etter at du har gitt samtykke via vårt
          informasjonskapsel-banner. Du kan lese mer om hvordan Google håndterer
          data her: &nbsp;
          <a href=" https://policies.google.com/privacy">
            https://policies.google.com/privacy
          </a>
        </p>
      </section>
      <section>
        <h2>Informasjonskapsler (cookies)</h2>
        <p>
          Nettstedet bruker informasjonskapsler for anonym statistikk. Du kan
          velge å godta eller avslå dette i informasjonskapsel-banneret som
          vises ved første besøk.
        </p>
        <section>
          <h3>Hva er informasjonskapsler?</h3>
          <p>
            Informasjonskapsler er små tekstfiler som lagres i nettleseren din
            når du besøker et nettsted. De brukes blant annet til å huske
            innstillinger, forbedre ytelse og samle anonym statistikk om bruk av
            nettstedet.
          </p>
        </section>
        <section>
          <h3>Hvilke informasjonskapsler bruker vi?</h3>
          <p>Vi bruker følgende typer informasjonskapsler:</p>
          <h4>1. Nødvendige informasjonskapsler</h4>
          <p>
            Disse er nødvendige for at nettstedet skal fungere som det skal og
            kan ikke deaktiveres i systemene våre. De settes vanligvis bare som
            svar på handlinger du gjør, for eksempel når du godtar
            cookie-banneret.
          </p>
          <h4>2. Analyse (valgfritt)</h4>
          <p>
            Vi bruker Google Analytics for å samle anonym statistikk om hvordan
            nettstedet brukes – for eksempel hvilke sider som er mest besøkt, og
            hvor lenge besøkende blir på siden. Dette hjelper oss å forbedre
            innholdet vårt. Disse informasjonskapslene lagres bare etter at du
            har gitt samtykke via vårt cookie-banner.
          </p>
        </section>
      </section>
    </StyledContainer>
  );
};
