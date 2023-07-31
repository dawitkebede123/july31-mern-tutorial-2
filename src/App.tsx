import { ChakraProvider,Box,Heading,Button } from "@chakra-ui/react"
import  "./style.css"
import _ from "lodash"

function App() {
  
  console.log(_.chunk(["a","b","c","d"],2))
  return (
  <Box id="container">
    <Box id="upper">
    </Box>
    <Box id="middle"></Box>
    <Box id="lower"></Box>
  </Box>
  )
}

export default App
