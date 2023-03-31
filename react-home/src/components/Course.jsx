import styled from "styled-components";

export const CourseCard = styled.div`
  display: flex;
  gap: 3rem;
  flex-basis: 100%;
  padding: 1rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & > p {
    margin: 3rem auto;
    max-width: 18rem;
    text-align: left;
    font-size: 0.75rem;
  }
`;

const Badge = styled.div`
  & img {
    width: 150px;
    height: 150px;
  }

  & p {
    text-align: center;
    font-size: 0.75rem;
  }
`;

export function CredlyBadge({ image, id, date }) {
  const url = `https://www.credly.com/badges/${id}/public_url`;
  return (
    <Badge>
      <a href={url}>
        <img src={`./badges/${image}`} alt={`${image}`}></img>
      </a>
      <p>{date}</p>
    </Badge>
  );
}
