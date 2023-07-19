import { Box, Stack } from '@mui/material'
import Feed from './component/Feed'
import Navbar from './component/Navbar'
import Rightbar from './component/Rightbar'
import Sidebar from './component/Sidebar'
function App() {
  return (
    <>
    <Box>
    <Navbar />

    <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
    <Sidebar />
    <Feed />
    <Rightbar />
    </Stack>

    </Box>
    </>
  )
}

export default App;
