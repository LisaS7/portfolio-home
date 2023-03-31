import styled from "styled-components";

const List = styled.ul`
  width: 50%;
  margin: auto;
  padding: 2rem;
  text-align: left;

  & h3 {
    text-align: center;
  }

  & li {
    padding: 1rem;
  }
`;

export default function Tools() {
  return (
    <>
      <h1>My Tools</h1>
      <p style={{ textAlign: "center" }}>
        Here's a list of my favourite tools to work with.
      </p>
      <List>
        <h3>Apps</h3>
        <li>VSCode - editor</li>
        <li>ITerm2 - terminal</li>
        <li>
          Magnet - allows me to snap windows into place on screen for organised
          multi-tasking
        </li>
        <li>Slack & Zoom - for communication</li>
        <li>Insomnia - API client with a simple but pretty interface</li>
      </List>
      <List>
        <h3>Desktop</h3>
        <li>
          Mac Mini Core i7 2018, 32GB RAM, 128GB SSD - this was a bargain,
          bought refurbished in late 2021 for only £650. A great wee computer
          and{" "}
        </li>
        <li>
          HP 23.8" Quad-HD Monitor - the perfect screen size for me and has a
          handy swivel stand so I can swing it around to portrait orientation
        </li>
        <li>
          MSI Optix 15.6" Ultra Slim Portable Monitor - a lightweight second
          screen which folds down smaller than most books
        </li>
        <li>
          Keychron K8 Bluetooth Mechanical Keyboard with RBG backlight - who
          doesn't love a clacky mechanical keyboard with multiple rainbow light
          patterns?
        </li>
        <li>
          Apple Magic Mouse (white) - I was skeptical about a flat mouse but now
          I'll never go back. So much less strain on my wrist!
        </li>
      </List>
      <List>
        <h3>Other</h3>
        <li>
          RocketBook - a wipe clean notebook with an accompanying app to scan
          and send notes straight to my Google Drive. Perfect for diagrams and
          planning.
        </li>
      </List>
    </>
  );
}
