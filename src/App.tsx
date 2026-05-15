import Navbar from "./components/Navbar";
import WriteBlock from "./WriteBlock/WriteBlock";
import { Box } from "@chakra-ui/react"; 
function App() {
  return (
    <>
      <Navbar pageActive={1}/>
      <WriteBlock/>
      <Box w="100px" h="1000px"/>
    </>
  );
}

export default App;
