import styled from "styled-components";

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
