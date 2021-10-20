import styled, { css } from "styled-components";

const Articles = styled.section`
  background-color: var(--black);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`;

const Excerpt = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-style: italic;
  display: none;
  text-align: center;
  width: 100%;
  font-family: var(--font-family-heading);
  background-color: var(--black);
  margin-top: 2rem;
  font-weight: var(--font-weight-normal);
  color: var(--white);
  padding: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1.6;
  text-align: center;
  display: table;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
`;

const TitleInner = styled.span`
  background-color: var(--black);
  color: var(--white);
  display: inline;
  padding: 0.6rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Card = styled.a`
  ${(props) =>
    props.cta
      ? css`
          background-color: var(--black);
        `
      : css`
          background-color: var(--red);
        `};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  aspect-ratio: 9/16;
  position: relative;
  border: 0.125rem solid var(--red);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, rgba(15, 17, 26, 0.25), rgba(15, 17, 26, 1));
  ${(props) =>
    props.imageUrl !== null &&
    css`
      background-image: linear-gradient(to bottom, rgba(15, 17, 26, 0.25), rgba(15, 17, 26, 1)),
        url(${props.imageUrl});
    `};

  &:focus,
  &:hover {
    cursor: pointer;
    background-blend-mode: unset;
  }

  &:focus ${Excerpt}, &:hover ${Excerpt} {
    display: block;
  }

  &:hover ${TitleInner}, &:focus ${TitleInner} {
    background-color: var(--white);
    color: var(--black);
    cursor: pointer;
  }
`;

const Author = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  display: block;
  text-align: center;
  width: 100%;
  font-family: var(--font-family-heading);
  background-color: var(--black);
  font-weight: var(--font-weight-bold);
  color: var(--white);
  padding: 0.5rem;
  bottom: 0;
  position: absolute;
`;

export { Articles, Card, Title, TitleInner, Author, Excerpt };
