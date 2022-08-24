import React from 'react'
import Message from "./Message";
// import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'Проверка очень длинного слова: idllamcorpellamcoramcorpellamcorpellamcllamcorpellamcorperpellamcorpeamcorpellamcorpellamcllamcorpellamcorperpellamcorpeamcorpellamcorpellamcllamcorpellamcorperpellamcorpepellamcllamcamcorpellamcorpellamcllamcorpellamcorperpellamcorpeorpellamcorperpellamcorpellamcorpe elementum vehicula. Etiam efficitur ante ullamcorper risus convallis volutpat. Morbi vel tincidunt nisl. Sed dapibus vel sem in ultricies.',
    time: '22:00',
}

function HW1() {
    return (
        <div style={{backgroundColor: "#3b3b3b", paddingTop: "20px", paddingBottom: "20px"}}>
            {/*<hr/>*/}
            {/*homeworks 1*/}
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
