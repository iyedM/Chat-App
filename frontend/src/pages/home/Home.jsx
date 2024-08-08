import MessageContainer from "../../components/messages/MessageContainer"
import Conversations from "../../components/sidebar/Conversations"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/> 
      <MessageContainer/>
      {/* <Conversations/> */}

    </div>
  )
}

export default Home


// import Conversations from "../../components/sidebar/Conversations"
// import Sidebar from "../../components/sidebar/Sidebar"

// const Home = () => {
//   return (
//     <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <Sidebar/> 
//       {/*<MessageContainer/>*/  }
//       {/* <Conversations/> */}

//     </div>
//   )
// }

// export default Home