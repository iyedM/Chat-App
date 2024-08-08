import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <div>
        <form className="px-4 my-3 ">
            <div className="w-full relative">
                <input type="text" placeholder="Send a Message" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "/>
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoSend className="w-5 h-5 text-white" />
                </button>
                </div>
        </form>

    </div>
  )
}

export default MessageInput


