import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Meaning from "./Meaning";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
//Random Word Generator: https://random-word-api.herokuapp.com/word

const HomePage = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [Data, setData] = useState([]);
  const [prevData, setPrevData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    // if (JSON.stringify(Data) !== JSON.stringify(prevData)) {
    //   setPrevData(Data);
    // }
    console.log("Data to be passed: ", Data);
  }, [Data]);

  async function getDataFromDick(searchTerm) {
    try {
      const dataFromDick = await axios.get(`/api/${searchTerm}`);
      setData(dataFromDick.data);
    } catch (error) {
      setData([]);
    }
  }

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (!searchTerm) {
  //     return;
  //   }
  //   fetch(`/api/${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // console.log("Fetched data: ", res); //prints sahi fetched data
  //       setData(res);
  //       // console.log("Data to be passed: ", Data); //prints empty object
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.error(error));
  // }, [searchTerm]);

  function handleButtonClick() {
    // setSearchTerm();
    // navigate("/meaning");
    getDataFromDick(inputRef.current.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      // setSearchTerm(inputRef.current.value);
      // navigate("/meaning");
      getDataFromDick(inputRef.current.value);
    }
  }

  return (
    <>
      {Data && Data.length > 0 ? (
        <>
          <button
            onClick={() => {
              setData([]);
            }}
          >
            Back
          </button>{" "}
          <Meaning term={Data} />{" "}
        </>
      ) : (
        <Container>
          <Title>Dictionary</Title>
          <SearchBar>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for a word..."
              onKeyPress={handleKeyDown}
              style={{ userSelect: "none", borderRadius: "30px" }}
            />
            <SearchButton onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </SearchButton>
          </SearchBar>
        </Container>
      )}

      {/* {JSON.stringify({ Data })} */}
    </>
  );
};
/*

<div class="dots"></div>

<style>
.dots {
   width: 17.3px;
   height: 17.3px;
   background: #f97300;
   color: #f97300;
   border-radius: 50%;
   box-shadow: 17.3px 0,-34.6px 0;
   animation: dots-h5boszlg 0.5s infinite linear alternate;
}

@keyframes dots-h5boszlg {
   50% {
      box-shadow: 17.3px 0,-17.3px 0;
   }

   100% {
      box-shadow: 34.6px 0,-17.3px 0;
   }
}
</style>*/
const Container = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 76vh;
  height: auto;
  min-height: 76vh;
  height: auto !important; /* for IE as it does not support min-height */
  height: 76vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0 0 3rem;
  text-align: center;
  // color: #e2dfd0; /* Dark gray text */
`;

const SearchBar = styled.div`
  display: flex;
  width: 50%;
  border-radius: 30px; /* Adjust for desired roundness */
  background-color: #fff; /* White background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  width: 100%;

  &:focus {
    outline: none; /* Blue outline on focus */
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vh;
  padding: 0.25rem;
  border: none;
  background-color: #f97300; /* Dark gray background */
  color: #fff; /* White text */
  cursor: pointer;
  border-radius: 30px; /* Match search bar roundness */
`;

const SearchIcon = styled.i`
  /* Replace this with your actual search icon component
   You can use libraries like FontAwesome or Font Awesome 5 */
`;

export default HomePage;
