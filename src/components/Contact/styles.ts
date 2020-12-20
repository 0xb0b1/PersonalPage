import styled from 'styled-components'

export const ContactLayout = styled.div`
  /* Contact */
  font-family: "Exo 2", sans-serif;
  display: flex;
  color: rgb(0, 0, 0);
  font-size: 1.3rem;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 100vh;

  .profile-image {
    margin: 1rem;
    box-shadow: 6px 6px 10px gray;
    width: 170px;
    border: 1px solid black;
    border-radius: 50%;
    background-image: url("../../images/me.png");
    background-size: cover;
    height: 170px;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
  }

  .cards {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    box-shadow: 3px 2px 10px gray;
    border-radius: 20px;
    flex-direction: column;
    width: 16rem;
    /* background: #e7dddd5c; */
    height: 9rem;
    margin: 1rem;
    padding: 1.3rem 0;
  }

  .cards:hover {
    border: 1px solid gray;
  }

  .contact-icons {
    display: flex;
    align-items: center;
    width: 100%;
    height: 33.33%;
    text-align: center;
    justify-content: center;
  }

  .contact-text {
    display: flex;
    margin-top: 0.7rem;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue";
    height: 33.33%;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
  }

  .contact-links {
    margin-top: 0.7rem;
    display: flex;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue";
    width: 90%;
    height: 33.33%;
    align-items: center;
    justify-content: center;
  }

  .contact-links > span {
    display: block;
  }

  .contact-links i {
    cursor: pointer;
    margin: 0.3rem;
    display: block;
    font-size: 1.3rem;
    position: relative;
    text-align: center;

    padding: 0.1rem;

    user-select: none;
  }

  .contact-links a {
    text-decoration: none;
  }

  .contact-links i:hover {
    box-shadow: 2px 2px 4px gray;

    border-radius: 20%;
  }

  .contact-links #github {
    color: rgba(0, 0, 0, 0.884);
  }

  .contact-links:hover #github {
    color: rgb(0, 0, 0);
  }

  .contact-links #facebook {
    color: rgba(28, 28, 231, 0.938);
  }

  .contact-links:hover #facebook {
    color: rgb(28, 28, 231);
  }

  .contact-links #instagram {
    color: rgba(214, 84, 45, 0.89);
  }

  .contact-links:hover #instagram {
    color: rgb(214, 84, 45);
  }

  .contact-links #linkedin {
    color: #3d8eb7ea;
  }

  .contact-links:hover #linkedin {
    color: #3d8eb7;
  }

  .contact-links #twitter {
    color: #00b7fff1;
  }

  .contact-links:hover #twitter {
    color: #00b7ff;
  }

  .contact-icons i {
    color: #f35166;
    cursor: pointer;
    font-size: 1.7rem;
    position: relative;
    user-select: none;
    transition: all 0.2s ease-in 0s;
  }
`